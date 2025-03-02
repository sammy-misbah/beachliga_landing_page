import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserCard from "./UserCard";
import PartnerCard from "./PartnerCard";
import utils from "../utils/Functions";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const PaymentRecap = ({
  event,
  category,
  isCamp,
  user,
  partner,
  team_size,
  gender,
  registerTeam,
  selectedCamp,
  withButton = true,
  partnerDiscount,
  userDiscount,
  isLoading,
  priceFromIntent,
  isPayment = false,
  language,
}) => {
  const totalDiscount =
    userDiscount !== 0 && partnerDiscount !== 0
      ? 2
      : userDiscount !== 0 || partnerDiscount !== 0
      ? 1
      : 0;

  const heightAdjustment = totalDiscount * 40;

  let baseHeight = 500;

  if (isCamp) {
    if (withButton) {
      baseHeight = 350;
    } else {
      baseHeight = 290;
    }
  } else {
    if (withButton) {
      baseHeight = 530;
    } else {
      baseHeight = 480;
    }
  }

  const translations = {
    en: {
      your_team: "Your team",
      discount: "Discount",
      total: "Total",
      continue_to_payment: "Continue to payment",
      loading: "Loading...",
    },
    es: {
      your_team: "Tu equipo",
      discount: "Descuento",
      total: "Total",
      continue_to_payment: "Continuar al pago",
      loading: "Cargando...",
    },
    ger: {
      your_team: "Dein Team",
      discount: "Rabatt",
      total: "Gesamt",
      continue_to_payment: "Weiter zur Zahlung",
      loading: "Lädt...",
    },
  };

  return (
    <div className="w-1/2 pl-12 flex justify-center">
      <div
        className="flex flex-col w-3/4 border-gray-600 border p-6 rounded-[25px] justify-between"
        style={{ maxHeight: `${baseHeight + heightAdjustment}px` }}
      >
        <div>
          <div className="text-xl font-[500]">{event.name}</div>
          <div className="text-lg mb-6 font-[500]  leading-tight">
            {!isCamp && utils.formatEventDate(event.startDate, event.endDate)}
          </div>
          <div className="font-[500] text-lg leading-tight">
            {!isCamp
              ? `${utils.capitalize(gender)} ${team_size}x${team_size}`
              : `${Math.ceil(
                  (new Date(category.end_date) -
                    new Date(category.start_date)) /
                    (1000 * 60 * 60 * 24)
                )} days camp`}
          </div>
          <div className="text-md font-[400] mb-4">
            {utils.formatDateRange(category.start_date, category.end_date)}
          </div>
          {!isCamp && (
            <div className="flex gap-x-1 items-center mb-4">
              <FontAwesomeIcon
                icon={solidStar}
                className="text-beachliga_blue"
              />
              <FontAwesomeIcon
                icon={regularStar}
                className="text-beachliga_blue"
              />
              <FontAwesomeIcon
                icon={regularStar}
                className="text-beachliga_blue"
              />
              <span className="font-[400]">
                {utils.capitalize(category.level)}
              </span>
            </div>
          )}

          <div>
            {!isCamp && (
              <div className="font-[500] text-lg mb-4">
                {translations[language]?.your_team}
              </div>
            )}
            <div className="flex justify-between">
              <UserCard user={user} />
              {!isCamp && userDiscount === 0 && `${category.price}€`}
              {!isCamp &&
                userDiscount !== 0 &&
                `${category.price - userDiscount}€`}
              {isCamp && userDiscount === 0 && `${category.price}€`}
              {isCamp &&
                userDiscount !== 0 &&
                `${category.price - userDiscount}€`}
            </div>
            {userDiscount !== 0 && (
              <div className="flex justify-between pl-14 pb-6">
                <div>
                  {isCamp
                    ? translations[language].discount
                    : translations[language].discount}
                </div>
                <div>{`- ${event.discount.whole}€`}</div>
              </div>
            )}

            <div className="flex justify-between">
              {partner && <PartnerCard partner={partner} />}
              {!isCamp &&
                partner &&
                partnerDiscount === 0 &&
                `${category.price}€`}
              {!isCamp &&
                partner &&
                partnerDiscount !== 0 &&
                `${category.price - partnerDiscount}€`}
            </div>
            {partner && partnerDiscount !== 0 && (
              <div className="flex justify-between pl-14  pb-2">
                <div>
                  {isCamp
                    ? translations[language].discount
                    : translations[language].discount}
                </div>
                <div>{`- ${event.discount.whole}€`}</div>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="flex justify-between text-lg font-[500] mb-6  pt-6 border-t border-gray-600">
            <div>{translations[language].total}</div>
            <div>
              {!isCamp &&
                !priceFromIntent &&
                !isPayment &&
                `${
                  category.price * team_size - userDiscount - partnerDiscount
                }€`}
              {isCamp &&
                !priceFromIntent &&
                !isPayment &&
                `${category.price - userDiscount - partnerDiscount}€`}
              {priceFromIntent && `${priceFromIntent.whole}€`}
            </div>
          </div>
          {withButton && (
            <button
              className={`w-full max-w-md px-4 py-2 bg-beachliga_blue text-white rounded-lg transition-all duration-300 ${
                (partner === null && !isCamp) ||
                (isCamp && selectedCamp === null) ||
                isLoading
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-blue-500"
              }`}
              onClick={registerTeam}
              disabled={
                partner === null && !isCamp && isCamp && selectedCamp === null
              }
            >
              {isLoading
                ? translations[language].loading
                : translations[language].continue_to_payment}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentRecap;
