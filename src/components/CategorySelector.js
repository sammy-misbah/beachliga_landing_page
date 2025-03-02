import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as solidStar,
  faMars,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const capitalize = (str) => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const CategorySelector = ({
  event,
  user,
  selectedCategory,
  partner,
  handleCategorySelect,
  categoryGender,
}) => {
  return (
    <div className="mb-4 w-full max-w-md">
      <div className="grid grid-cols-1 gap-2">
        {event.categories.map((category, index) => {
          if (category.gender !== categoryGender) {
            return null;
          }
          const isDisabled =
            (category.gender === "men" && user.gender !== "male") ||
            (category.gender === "women" && user.gender !== "female");

          return (
            <div
              key={index}
              className={`flex items-center justify-between px-4 py-3 border border-gray-600 rounded-lg cursor-pointer ${
                selectedCategory === category.id ? "!bg-blue-100" : ""
              }`}
              onClick={() =>
                !isDisabled && !partner && handleCategorySelect(category, false)
              }
            >
              <div className="flex gap-x-1 items-center">
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
                <span className="">{capitalize(category.level)}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySelector;
