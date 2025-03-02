import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Configure,
  useInstantSearch,
} from "react-instantsearch";
import { liteClient } from "algoliasearch/lite";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMars,
  faVenus,
  faSearch,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CategorySelector from "../components/CategorySelector";
import CampSelector from "../components/CampSelector";
import UserCard from "../components/UserCard";
import PartnerCard from "../components/PartnerCard";
import PaymentRecap from "../components/PaymentRecap";
import utils from "../utils/Functions";

const algoliaAppId = process.env.REACT_APP_ALGOLIA_APP_ID;
const algoliaKey = process.env.REACT_APP_ALGOLIA_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

const searchClient = liteClient(algoliaAppId, algoliaKey);

function EmptyQueryBoundary({ children, fallback }) {
  const { indexUiState } = useInstantSearch();
  return !indexUiState.query ? (
    <>
      {fallback}
      <div hidden>{children}</div>
    </>
  ) : (
    children
  );
}

const capitalize = (str) => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const CustomSearchBox = () => {
  return (
    <div className="relative w-full max-w-md my-4">
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      />
      <SearchBox
        placeholder="Start typing..."
        className="pl-10 pr-4 py-3 border border-gray-600 rounded-full !focus:outline-none !focus:ring-0 !focus:border-none custom-searchbox"
        submitIconComponent={"empty"}
        resetIconComponent={"empty"}
      />
    </div>
  );
};

const translations = {
  en: {
    back_to_event: "Back to the event",
    your_registration: "Your registration",
    registration_deadline: "Registration deadline",
    select_level: "Select event level",
    select_camp: "Select a camp",
    select_partners: "Select partners",
    registering_as: "You are registering as",
  },
  es: {
    back_to_event: "Volver al evento",
    your_registration: "Tu inscripción",
    registration_deadline: "Fecha límite de inscripción",
    select_level: "Selecciona el nivel del evento",
    select_camp: "Selecciona un camp",
    select_partners: "Selecciona compañeros",
    registering_as: "Te estás registrando como",
  },
  ger: {
    back_to_event: "Zurück zum Event",
    your_registration: "Deine Anmeldung",
    registration_deadline: "Anmeldeschluss",
    select_level: "Eventlevel auswählen",
    select_camp: "Wähle ein Camp aus",
    select_partners: "Partner auswählen",
    registering_as: "Du meldest dich an als",
  },
};

const SearchPartners = ({ language, setLanguage }) => {
  const location = useLocation();
  const { event, gender, team_size, isCamp } = location.state;
  const [user, setUser] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedCamp, setSelectedCamp] = useState(null);
  const [category, setCategory] = useState(null);
  const [partner, setPartner] = useState(null);
  const [eventParticipants, setEventParticipants] = useState([]);
  const [categoryParticipants, setCategoryParticipants] = useState([]);
  const [userDiscount, setUserDiscount] = useState(0);
  const [partnerDiscount, setPartnerDiscount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);

        const categoriesParticipants = event.categories.flatMap((category) =>
          category.teams.flatMap((team) =>
            team.members.map((member) => member.id)
          )
        );

        setEventParticipants(categoriesParticipants);

        const registeredParticipantIds = event.categories
          .filter((category) => category.gender === gender)
          .flatMap((category) => category.teams)
          .flatMap((team) => team.members)
          .map((member) => member.id);

        setCategoryParticipants(registeredParticipantIds);

        if (categoriesParticipants.includes(parsedUser.id.toString())) {
          setUserDiscount(event.discount.whole);
        }
      } catch (error) {
        console.error("Error parsing userData:", error);
      }
    }
  }, [event, gender]);

  const handleCategorySelect = (category, isCamp) => {
    setCategory(category);
    setSelectedCategory(category.id);
    setSelectedGender(category.gender);

    if (isCamp) {
      setPartner(null);
      setSelectedCamp(category);
    }
  };

  const Hit = ({ hit, isPartnerDisabled }) => (
    <div
      className={`py-2 bg-white mb-2 ${
        isPartnerDisabled(hit, categoryParticipants)
          ? "opacity-50"
          : "cursor-pointer"
      }`}
      onClick={() =>
        !isPartnerDisabled(hit, categoryParticipants) && addPartner(hit)
      }
    >
      <div className="flex items-center">
        <img
          src={
            hit.image.url.includes("sportague") ||
            hit.image.url.includes("googleusercontent") ||
            (hit.image.url.includes("facebook") && hit.gender === "male")
              ? "https://sportague.com/img/profiles/faf03acb-2a0f-4829-9d19-c489e88c145c.jpg"
              : hit.image.url.includes("facebook") && hit.gender === "female"
              ? "https://sportague.com/img/profiles/ac51cfa9-30ce-485e-b9fa-9ed6059bc4e6.jpg"
              : `https://storage.revel.cool/img/profiles/${hit.image.url}`
          }
          alt="user_image"
          width={40}
          height={40}
          className="rounded-full mr-4"
        />

        <div>
          <p className="font-semibold flex items-center gap-2">
            {hit.full_name}
            {hit.gender === "male" ? (
              <FontAwesomeIcon icon={faMars} className="text-blue-500" />
            ) : hit.gender === "female" ? (
              <FontAwesomeIcon icon={faVenus} className="text-pink-500" />
            ) : null}
          </p>
          <p className="text-gray-600 text-md leading-tight">
            {hit.user_name ? `@${hit.user_name}` : ""}
          </p>
        </div>
      </div>
    </div>
  );

  const addPartner = (partner) => {
    setPartner(partner);
    if (eventParticipants.includes(partner.id)) {
      setPartnerDiscount(event.discount.whole);
    } else {
      setPartnerDiscount(0);
    }
  };

  const deletePartner = () => {
    setPartner(null);
  };

  const registerTeam = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        console.error("Token not found");
        return;
      }

      const teamMembers = isCamp
        ? [{ team_member_id: user.id, without_shirt_selected: true }]
        : [
            { team_member_id: user.id, without_shirt_selected: true },
            { team_member_id: partner.id, without_shirt_selected: true },
          ];

      const response = await axios.post(
        `${apiUrl}/rv1/payments/competitions/intent`,
        {
          category_id: selectedCategory.toString(),
          payer_id: user.id,
          team_members: teamMembers,
          is_camp: isCamp,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const priceFromIntent = response.data.price;
      const secret = response.data.secret;
      navigate("/payment", {
        state: {
          event: event,
          secret: secret,
          userId: user.id,
          categoryId: selectedCategory.toString(),
          category: category,
          isCamp: isCamp,
          teamMembers,
          user: user,
          partner: partner,
          team_size,
          gender,
          userDiscount,
          partnerDiscount,
          priceFromIntent,
        },
      });
    } catch (error) {
      console.error("Error registering team:", error);
    }
    setIsLoading(false);
  };

  const isPartnerDisabled = (partner, categoryParticipants) => {
    if (!user || !selectedGender) return false;
    if (categoryParticipants.includes(partner.id) || partner.id === user.id) {
      return true;
    }

    if (selectedGender === "men") {
      return partner.gender !== "male";
    }
    if (selectedGender === "women") {
      return partner.gender !== "female";
    }
    if (selectedGender === "mix") {
      return user.gender === partner.gender;
    }

    return false;
  };

  const formatDateTime = (isoString) => {
    const date = new Date(isoString);

    const dateOptions = { weekday: "short", day: "numeric", month: "short" };
    const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: true };

    const formattedDate = date.toLocaleDateString("en-GB", dateOptions);
    const formattedTime = date
      .toLocaleTimeString("en-GB", timeOptions)
      .toLowerCase();

    return `${formattedDate}, ${formattedTime}`;
  };

  const baseCategory =
    event.categories.find((category) => category.gender === gender) || null;

  const handleBackTap = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between font-[gotham]">
      <div>
        <Navbar language={language} setLanguage={setLanguage} />
        <div className="flex max-w-[1200px] px-12 mx-auto mt-[60px] space-x-2 items-center">
          <div
            className="flex items-center space-x-3 font-[500] cursor-pointer"
            onClick={handleBackTap}
          >
            <FontAwesomeIcon icon={faChevronLeft} size="md" />
            <div className="text-lg font-[500]">
              {translations[language].back_to_event}
            </div>
          </div>
        </div>
        <div className="flex max-w-[1200px] px-12 mx-auto mt-12 pb-24 space-x-6">
          <div className="flex flex-col w-1/2 max-w-md font-[400]">
            {baseCategory && (
              <div>
                <h2 className="font-[500] text-3xl mb-6">
                  {translations[language].your_registration}
                </h2>
                <div className="font-[500] text-lg">
                  {capitalize(baseCategory.gender)} {baseCategory.team_size}x
                  {baseCategory.team_size}
                </div>
                <div className="mb-3 font-[400] text-lg leading-tight">
                  {utils.formatDateRange(
                    baseCategory.start_date,
                    baseCategory.end_date,
                    language
                  )}
                </div>
                <div className="text-lg font-[400]">
                  {translations[language].registration_deadline}:
                </div>
                <div className="pb-6 mb-6 border-b border-gray-600 text-lg font-[400]  leading-tight">
                  {formatDateTime(baseCategory.end_registration_date)}
                </div>
              </div>
            )}

            <div className="border-gray-600 border-b pb-6 mb-6">
              <div className="font-[500] text-lg mb-4">
                {!isCamp
                  ? translations[language].select_level
                  : translations[language].select_camp}
              </div>
              {event?.categories?.length > 0 && user && !isCamp && (
                <CategorySelector
                  event={event}
                  partner={partner}
                  handleCategorySelect={handleCategorySelect}
                  selectedCategory={selectedCategory}
                  user={user}
                  categoryGender={gender}
                />
              )}
              {event?.camps?.length > 0 && user && isCamp && (
                <CampSelector
                  event={event}
                  partner={partner}
                  handleCategorySelect={handleCategorySelect}
                  selectedCategory={selectedCategory}
                  user={user}
                  language={language}
                />
              )}
            </div>
            <div>
              <div className="font-[500] text-lg mb-4">
                {!isCamp
                  ? translations[language].select_partners
                  : translations[language].registering_as}
              </div>
              {selectedCategory && <UserCard user={user} />}
              {selectedCategory && !partner && !isCamp && (
                <InstantSearch
                  indexName="users_all"
                  searchClient={searchClient}
                  initialUiState={{ users_all: { query: "" } }}
                >
                  <div className="search-panel w-full flex flex-col">
                    <CustomSearchBox />
                    <div className="max-w-md w-full mt-2 overflow-hidden z-10">
                      <EmptyQueryBoundary fallback={null}>
                        {partner ? (
                          <PartnerCard
                            partner={partner}
                            deletePartner={deletePartner}
                          />
                        ) : (
                          <Hits
                            hitComponent={({ hit }) => (
                              <Hit
                                hit={hit}
                                isPartnerDisabled={isPartnerDisabled}
                              />
                            )}
                          />
                        )}
                      </EmptyQueryBoundary>
                    </div>
                    <Configure hitsPerPage={5} />
                  </div>
                </InstantSearch>
              )}
              {selectedCategory && partner && (
                <PartnerCard partner={partner} deletePartner={deletePartner} />
              )}
            </div>
          </div>

          {category && (
            <PaymentRecap
              event={event}
              category={category}
              isCamp={isCamp}
              user={user}
              partner={partner}
              team_size={team_size}
              gender={gender}
              registerTeam={registerTeam}
              selectedCamp={selectedCamp}
              userDiscount={userDiscount}
              partnerDiscount={partnerDiscount}
              isLoading={isLoading}
              language={language}
            />
          )}
        </div>
      </div>
      <Footer language={language} />
    </div>
  );
};

export default SearchPartners;
