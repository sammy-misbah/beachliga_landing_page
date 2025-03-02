import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import MapComponent from "../components/Map";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";
import utils from "../utils/Functions";

const EventInfo = ({ language, setLanguage }) => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedTeamSize, setSelectedTeamSize] = useState(null);
  const [isCamp, setIsCamp] = useState(false);
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const translations = {
    en: {
      training_camps: "Training camps",
      competitions: "Competitions",
      organized_by: "Organized by",
      description: "Description",
      location: "Location",
      register: "Register",
      warning: "Warning",
      select_option: "Select the desired option in order to continue.",
    },
    es: {
      training_camps: "Campus de entrenamiento",
      competitions: "Competiciones",
      organized_by: "Organizado por",
      description: "Descripción",
      location: "Ubicación",
      register: "Inscribirse",
      warning: "Aviso",
      select_option: "Elige una opción para continuar.",
    },
    ger: {
      training_camps: "Trainingslager",
      competitions: "Wettbewerbe",
      organized_by: "Organisiert von",
      description: "Beschreibung",
      location: "Standort",
      register: "Registrieren",
      warning: "Achtung",
      select_option: "Wähle die gewünschte Option, um fortzufahren.",
    },
  };

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    var user = "";
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
        user = parsedUser;
      } catch (error) {
        console.error("Error parsing userData:", error);
      }
    }
    const eventDocRef = doc(db, "competitions", eventId);

    const mapEventData = (data) => {
      const campsArray =
        data.camps?.map((camp) => {
          const isUserRegisteredForCamp = camp.participants?.some(
            (participant) => participant.id === user.id
          );

          return {
            id: camp.id,
            start_date: camp.date.start,
            end_date: camp.date.end,
            max_participants: camp.max_participants,
            price: camp.price / 100,
            start_register_date: camp.register_date.start,
            end_register_date: camp.register_date.end,
            participants: camp.participants,
            isUserRegistered: isUserRegisteredForCamp,
          };
        }) || [];

      const categoriesArray =
        data.categories?.map((category) => {
          const isUserRegisteredForCategory = category.teams?.some((team) =>
            team.members.some((member) => member.id === user.id)
          );

          return {
            id: category.id,
            start_date: category.date.start,
            end_date: category.date.end,
            checkin_time: category.check_in_time,
            gender: category.gender,
            level: category.level,
            max_teams: category.max_teams,
            start_registration_date: category.registration_date.start,
            end_registration_date: category.registration_date.end,
            team_size: category.team_size,
            price: category.price.whole,
            teams: category.teams,
            isUserRegistered: isUserRegisteredForCategory,
          };
        }) || [];

      return {
        id: eventId,
        name: data.name,
        description: data.description,
        startDate: data.date.start,
        endDate: data.date.end,
        image: data.image,
        country: data.address.country,
        locality: data.address.locality,
        location: data.address.location,
        camps: campsArray,
        categories: categoriesArray,
        organization: data.organization,
        discount: data.discount_per_additional_categories,
        coordinates: data.address.coordinates,
      };
    };

    const unsubscribe = onSnapshot(
      eventDocRef,
      (docSnap) => {
        if (docSnap.exists()) {
          try {
            const eventData = docSnap.data();
            const eventObject = mapEventData(eventData);
            setEvent(eventObject);
          } catch (error) {
            console.error("Error parsing event data:", error);
          }
        } else {
          console.log("No such document!");
        }
      },
      (err) => {
        console.error("Error getting document:", err);
      }
    );

    return () => unsubscribe();
  }, [eventId]);

  const formatEventDate = (startDate, endDate) => {
    const optionsDate = { weekday: "long", month: "short", day: "numeric" };
    const optionsTime = { hour: "numeric", minute: "numeric", hour12: true };

    const start = new Date(startDate);
    const end = new Date(endDate);

    const startDateFormatted = start.toLocaleDateString("en-US", optionsDate);
    const startTimeFormatted = start.toLocaleTimeString("en-US", optionsTime);

    const endDateFormatted = end.toLocaleDateString("en-US", {
      day: "numeric",
    });

    return `${startDateFormatted} - ${endDateFormatted} ${startTimeFormatted}`;
  };

  const capitalize = (str) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const handleCategorySelect = (category) => {
    setSelectedGender(category.gender);
    setSelectedTeamSize(category.team_size);
    setIsCamp(false);
  };

  const handleCampSelect = () => {
    setIsCamp(true);
    setSelectedGender(null);
    setSelectedTeamSize(null);
  };

  const handleRegister = () => {
    if (!selectedGender && !isCamp) {
      return setModalOpen(true);
    }
    if (!auth.currentUser) {
      navigate("/login");
    } else {
      navigate("/search_partners", {
        state: {
          event: event,
          gender: selectedGender,
          team_size: selectedTeamSize,
          isCamp,
        },
      });
    }
  };

  const CampInfo = ({ camps, user }) => {
    const isSelected = isCamp;
    const durations = [];
    let minPrice = Infinity;
    let maxPrice = -Infinity;
    let firstStartDate = null;
    let lastEndDate = null;

    let isRegistered = false;

    if (user) {
      const isUserRegistered = () => {
        return camps.some((camp) =>
          camp.participants.some((participant) => participant.id === user.id)
        );
      };
      isRegistered = isUserRegistered();
    }

    camps.forEach((camp) => {
      const startDate = new Date(camp.start_date);
      const endDate = new Date(camp.end_date);
      const durationInDays = Math.round(
        (endDate - startDate) / (1000 * 3600 * 24)
      );

      if (!durations.includes(durationInDays)) {
        durations.push(durationInDays);
      }

      minPrice = Math.min(minPrice, camp.price);
      maxPrice = Math.max(maxPrice, camp.price);

      if (!firstStartDate || startDate < firstStartDate) {
        firstStartDate = startDate;
      }
      if (!lastEndDate || endDate > lastEndDate) {
        lastEndDate = endDate;
      }
    });

    durations.sort((a, b) => a - b);

    const durationStr = utils.getDurationString(durations, language);

    const formattedDateRange = utils.formatDateRange(
      firstStartDate,
      lastEndDate,
      language
    );

    return (
      <div>
        <h2 className="font-[500] text-lg mb-4">
          {translations[language].training_camps}
        </h2>
        <div
          className={`px-4 py-2 border mb-4 rounded-lg  border-gray-600 ${
            isSelected ? "bg-sky-100" : ""
          } ${isRegistered ? "opacity-50" : "cursor-pointer"}`}
          onClick={() => (isRegistered ? null : handleCampSelect())}
        >
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="font-[500] text-lg">{`${durationStr}`}</p>
              <p className="font-[400]">{`${formattedDateRange}`}</p>
            </div>
            <div className="border-l border-gray-600 pl-4 w-1/4 flex items-center justify-center">
              <p className="whitespace-pre-line text-lg font-[400]">
                {!isRegistered
                  ? `${minPrice}€ to\n ${maxPrice}€`
                  : "Registered"}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CategoriesInfo = ({ categories }) => {
    return (
      <div className="pb-2 border-b border-gray-600">
        <h2 className="font-[500] text-lg mb-4">
          {translations[language].competitions}
        </h2>
        {categories.map((category, index) => {
          const isDisabled =
            (user && category.gender === "men" && user.gender !== "male") ||
            (user && category.gender === "women" && user.gender !== "female");
          const isRegistered = category.isUserRegistered;
          const isSelected = selectedGender === category.gender;
          const startDate = new Date(category.start_date);
          const endDate = new Date(category.end_date);

          const price = category.price;
          const gender = category.gender;
          const teamSize = category.team_size;

          const formattedDateRange = utils.formatDateRange(
            startDate,
            endDate,
            language
          );

          return (
            <div
              key={index}
              className={`border mb-4 rounded-lg border-gray-600 ${
                isSelected
                  ? "bg-sky-100  cursor-pointer"
                  : isDisabled
                  ? "bg-gray-300 opacity-50"
                  : isRegistered
                  ? "opacity-50"
                  : "cursor-pointer"
              }`}
              onClick={() =>
                !isDisabled && !isRegistered && handleCategorySelect(category)
              }
            >
              <div className=" px-4 py-2">
                <div className="flex justify-between">
                  <div className="flex flex-col flex-grow">
                    <p className="font-[500] text-lg ">{`${capitalize(
                      gender
                    )} ${teamSize}x${teamSize}`}</p>
                    <p className="font-[400]">{`${formattedDateRange}`}</p>
                  </div>
                  <div className="border-l border-gray-600 pl-4 w-1/4  flex items-center justify-center">
                    <p className="whitespace-pre-line text-lg font-[400]">
                      {!isRegistered ? `${price}€` : "Registered"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col justify-between font-[gotham]">
      <div>
        <Navbar language={language} setLanguage={setLanguage} />
        <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
          <DialogTitle className="text-center text-lg font-[600]">
            {translations[language].warning}
          </DialogTitle>
          <DialogContent className="text-lg font-[500] flex flex-col items-center">
            <div className="mb-6 w-3/4 text-center leading-6">
              {translations[language].select_option}
            </div>
            <div className="flex justify-center max-w-[150px] bg-beachliga_blue w-full text-white rounded-lg">
              <Button
                onClick={() => setModalOpen(false)}
                className="!text-white w-full"
              >
                OK
              </Button>
            </div>
          </DialogContent>
        </Dialog>
        {event ? (
          <div className="flex items-start flex-row mb-32 max-w-[1200px] px-6 mx-auto mt-[60px]">
            <div className="w-1/2 space-y-6 mr-8">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={`https://storage.revel.cool/img/events/${event.image.url}`}
                alt="event_image"
              />
              <CampInfo camps={event.camps} user={user} />
              <CategoriesInfo categories={event.categories} />

              <button
                className={`w-full px-4 py-2 rounded-lg transition-all duration-300 bg-beachliga_blue text-white  hover:bg-blue-500
                   
                `}
                onClick={handleRegister}
              >
                {translations[language].register}
              </button>
            </div>
            <div className="w-2/3 flex flex-col ml-8">
              <h2 className="text-3xl font-[500]">{event.name}</h2>
              <p className="text-2xl font-[500] mb-6">
                {formatEventDate(event.startDate, event.endDate)}
              </p>
              <div className="flex mb-6">
                <div className="text-lg font-[500]">
                  <p>{event.location}</p>
                  <p>
                    {event.locality}, {event.country}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 items-center border-b mb-6 pb-6 border-gray-600">
                <img
                  className="rounded-lg"
                  src={`http://storage.revel.cool/img/clubs/${event.organization.image.url}`}
                  width={50}
                  height={50}
                  alt="club_image"
                />
                <div className="flex flex-col text-md font-[500]">
                  <p>{translations[language].organized_by}</p>
                  <p>{event.organization.name}</p>
                </div>
              </div>
              <div className="mb-6 pb-6 border-b border-gray-600">
                <h2 className="font-[500] text-lg mb-4">
                  {translations[language].description}
                </h2>
                <p className="text-md font-[400]">{event.description}</p>
              </div>
              <div className="mb-6 pb-6">
                <h2 className="font-[500] text-lg mb-4">
                  {translations[language].location}
                </h2>
                <p className="text-md font-[400] mb-6">{event.location}</p>
                <MapComponent
                  location={{
                    latitude: event.coordinates.latitude,
                    longitude: event.coordinates.longitude,
                  }}
                />
              </div>
            </div>
          </div>
        ) : (
          <div>Loading event data...</div>
        )}
      </div>
      <Footer language={language} />
    </div>
  );
};

export default EventInfo;
