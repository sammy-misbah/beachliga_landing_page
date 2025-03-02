const formatEventDate = (startDate, endDate) => {
  if (!startDate || !endDate) return "";

  const optionsDate = { weekday: "long", month: "short", day: "numeric" };
  const optionsTime = { hour: "2-digit", minute: "2-digit", hour12: true };

  const start = new Date(startDate);
  const end = new Date(endDate);

  if (isNaN(start) || isNaN(end)) return "";

  // Format start and end dates
  const startDateFormatted = start.toLocaleDateString("en-US", optionsDate);
  const startTimeFormatted = start
    .toLocaleTimeString("en-US", optionsTime)
    .replace("AM", "am")
    .replace("PM", "pm");
  const endDay = end.getDate(); // Only show the numeric day for the end date

  return `${startDateFormatted} - ${endDay} ${startTimeFormatted}`;
};

const formatDateTime = (isoString) => {
  if (!isoString) return "";

  const date = new Date(isoString);
  if (isNaN(date)) return "";

  const dateOptions = { weekday: "short", day: "numeric", month: "short" };
  const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: false };

  const formattedDate = date.toLocaleDateString("en-US", dateOptions);
  const formattedTime = date.toLocaleTimeString("en-US", timeOptions);

  return `${formattedDate}, ${formattedTime}`;
};

const formatDateRange = (startDate, endDate, language) => {
  if (!startDate || !endDate) return "";

  const start = new Date(startDate);
  const end = new Date(endDate);

  if (isNaN(start) || isNaN(end)) return "";

  const localeMap = {
    en: "en-US",
    es: "es-ES",
    ger: "de-DE",
  };

  const locale = localeMap[language] || "en-US";

  const options = { day: "numeric", month: "short" };
  const startFormatted = start.toLocaleDateString(locale, options);
  const endFormatted = end.toLocaleDateString(locale, options);

  const startDay = start.getDate();
  const endDay = end.getDate();
  const startMonth = start.toLocaleDateString(locale, { month: "short" });
  const endMonth = end.toLocaleDateString(locale, { month: "short" });

  return startMonth === endMonth
    ? `${startDay} - ${endDay} ${startMonth}`
    : `${startFormatted} - ${endFormatted}`;
};

const capitalize = (str) => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const getDurationString = (durations, language) => {
  if (!durations || durations.length === 0) return "";

  const conjunctions = {
    en: " or ",
    es: " o ",
    ger: " oder ",
  };

  const daysWord = {
    en: " days",
    es: " días",
    ger: " Tage",
  };

  const conjunction = conjunctions[language] || " or ";
  const days = daysWord[language] || " days"; // Default to English

  return (
    (durations.length > 1
      ? durations.slice(0, -1).join(", ") +
        conjunction +
        durations[durations.length - 1]
      : durations[0]) + days
  );
};

const utils = {
  formatEventDate,
  formatDateTime,
  formatDateRange,
  capitalize,
  getDurationString,
};

export default utils;
