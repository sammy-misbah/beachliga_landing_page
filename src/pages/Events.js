import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import utils from "../utils/Functions";

const Events = ({ language, setLanguage }) => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const clubDocRef = doc(db, "clubs", "2");

    const fetchEvents = async () => {
      try {
        const docSnap = await getDoc(clubDocRef);
        if (docSnap.exists()) {
          const clubData = docSnap.data();
          const eventsArray =
            clubData.events?.map((event) => ({
              id: event.id,
              name: event.name,
              start_date: event.date?.start,
              end_date: event.date?.end,
              image: event.image,
              country: event.address?.country,
              locality: event.address?.locality,
              location: event.address?.location,
              organization_name: clubData.name,
              organization_image: clubData.image,
            })) || [];

          setEvents(eventsArray);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const translations = {
    en: {
      title: "Upcoming Events",
    },
    es: {
      title: "Próximos eventos",
    },
    ger: {
      title: "Kommende Veranstaltungen",
    },
  };

  const handleEventClick = (id) => {
    navigate(`/events/${id}`);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between font-[gotham]">
      <div>
        <Navbar language={language} setLanguage={setLanguage} />
        <div className="max-w-6xl mx-auto mt-[60px] px-6 mb-12">
          <h2 className="text-3xl font-[500] mb-4">
            {translations[language].title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white  cursor-pointer"
                onClick={() => handleEventClick(event.id)}
              >
                <img
                  className="w-full h-48 object-cover rounded-md"
                  src={`https://storage.revel.cool/img/events/${event.image.url}`}
                  alt={event.name}
                />
                <div className="flex items-center gap-x-2 my-4">
                  <img
                    className="rounded-lg"
                    src={`http://storage.revel.cool/img/clubs/${event.organization_image.url}`}
                    width={40}
                    height={40}
                    alt="club_image"
                  />
                  <div>
                    <h3 className="text-xl font-[500]">{event.name}</h3>
                    <p className="text-lg font-[400] leading-tight">
                      {utils.formatDateRange(
                        event.start_date,
                        event.end_date,
                        language
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer language={language} />
    </div>
  );
};

export default Events;
