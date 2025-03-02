import utils from "../utils/Functions";

const translations = {
  en: "{numberOfDays} days Camp",
  es: "Camp de {numberOfDays} días",
  de: "{numberOfDays}-Tage-Camp",
};

const CampText = ({ numberOfDays, language }) => {
  const translatedText = translations[language].replace(
    "{numberOfDays}",
    numberOfDays
  );

  return <span className="text-lg font-[500]">{translatedText}</span>;
};

const CampSelector = ({
  event,
  selectedCategory,
  handleCategorySelect,
  language,
}) => {
  const sortedCamps = [...event.camps].sort((a, b) => {
    const daysA = Math.ceil(
      (new Date(a.end_date) - new Date(a.start_date)) / (1000 * 60 * 60 * 24)
    );
    const daysB = Math.ceil(
      (new Date(b.end_date) - new Date(b.start_date)) / (1000 * 60 * 60 * 24)
    );
    return daysA - daysB;
  });

  return (
    <div className="mb-4 w-full max-w-md">
      <div className="grid grid-cols-1 gap-2">
        {sortedCamps.map((camp, index) => {
          const numberOfDays = Math.ceil(
            (new Date(camp.end_date) - new Date(camp.start_date)) /
              (1000 * 60 * 60 * 24)
          );

          return (
            <div
              key={index}
              className={`flex items-center justify-between p-3 border border-gray-600 rounded-lg ${
                selectedCategory === camp.id ? "!bg-blue-100" : "cursor-pointer"
              }`}
              onClick={() => handleCategorySelect(camp, true)}
            >
              <div>
                <CampText numberOfDays={numberOfDays} language={language} />
                <div>
                  {utils.formatDateRange(camp.start_date, camp.end_date)}
                </div>
              </div>
              <span className="text-lg font-[400]">{`${camp.price} €`}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CampSelector;
