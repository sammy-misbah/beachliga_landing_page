import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import PaymentRecap from "../components/PaymentRecap";

const stripeKey = process.env.REACT_APP_STRIPE_KEY;

const stripePromise = loadStripe(stripeKey);

const translations = {
  en: {
    back_to_event: "Back to the event",
    payment: "Payment",
    card: "Card",
    pay_now: "Pay now",
    processing: "Processing...",
  },
  es: {
    back_to_event: "Volver al evento",
    payment: "Pago",
    card: "Tarjeta",
    pay_now: "Pagar ahora",
    processing: "Procesando...",
  },
  ger: {
    back_to_event: "Zurück zur Veranstaltung",
    payment: "Zahlung",
    card: "Karte",
    pay_now: "Jetzt bezahlen",
    processing: "Verarbeitung...",
  },
};

const Payment = ({ language, setLanguage, userId, selectedCategory }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    secret,
    category,
    event,
    isCamp,
    gender,
    team_size,
    user,
    partner,
    userDiscount,
    partnerDiscount,
    priceFromIntent,
  } = location.state || {};

  const state = location.state;

  const handleBackTap = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between font-[gotham]">
      <div>
        <Navbar language={language} setLanguage={setLanguage} />
        <div className="flex max-w-[1200px] px-12 mx-auto mt-[60px] space-x-2 items-center">
          <div
            className="flex items-center space-x-3 font-bold cursor-pointer"
            onClick={handleBackTap}
          >
            <FontAwesomeIcon icon={faChevronLeft} size="md" />
            <div className="font-[500] text-lg">
              {translations[language].back_to_event}
            </div>
          </div>
        </div>
        <div className="flex max-w-[1200px] px-12 mx-auto mt-12 pb-24 space-x-6">
          <div className="flex flex-col w-1/2 max-w-md">
            <div className="text-3xl font-[500] mb-8">
              {translations[language].payment}
            </div>
            <div className="flex items-center gap-x-2 mb-4">
              <FontAwesomeIcon icon={faCreditCard} />
              <div className="text-lg font-[500]">
                {translations[language].card}
              </div>
            </div>

            <Elements stripe={stripePromise}>
              <PaymentForm
                secret={secret}
                userId={userId}
                selectedCategory={selectedCategory}
                state={state}
                language={language}
              />
            </Elements>
          </div>
          <PaymentRecap
            event={event}
            category={category}
            user={user}
            gender={gender}
            isCamp={isCamp}
            partner={partner}
            registerTeam={null}
            team_size={team_size}
            withButton={false}
            userDiscount={userDiscount}
            partnerDiscount={partnerDiscount}
            priceFromIntent={priceFromIntent}
            isPayment={true}
            language={language}
          />
        </div>
      </div>
      <Footer language={language} />
    </div>
  );
};

const PaymentForm = ({ secret, state, language }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.error("Stripe.js or Elements not loaded correctly.");
      return;
    }

    setIsProcessing(true);
    const cardElement = elements.getElement(CardNumberElement);

    if (!cardElement) {
      console.error("Card element not found.");
      setIsProcessing(false);
      return;
    }

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(secret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (error) {
        console.error("Payment failed:", error);
        alert(`Payment failed: ${error.message}`);
      } else if (paymentIntent.status === "succeeded") {
        navigate("/payment_confirmation", { state: state });
      }
    } catch (err) {
      console.error("Error during payment:", err);
      alert("An error occurred. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="p-4 border rounded-md shadow-sm">
          <CardNumberElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": { color: "#aab7c4" },
                },
                invalid: { color: "#9e2146" },
              },
            }}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border rounded-md shadow-sm">
            <CardExpiryElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": { color: "#aab7c4" },
                  },
                  invalid: { color: "#9e2146" },
                },
              }}
            />
          </div>
          <div className="p-4 border rounded-md shadow-sm">
            <CardCvcElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": { color: "#aab7c4" }, // Light grey placeholder
                  },
                  invalid: { color: "#9e2146" },
                },
              }}
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={isProcessing || !stripe}
          className={`w-full max-w-md px-4 py-2 bg-beachliga_blue text-white rounded-lg transition-all duration-300 hover:bg-blue-500 ${
            isProcessing ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isProcessing
            ? translations[language].processing
            : translations[language].pay_now}
        </button>
      </form>
    </div>
  );
};

export default Payment;
