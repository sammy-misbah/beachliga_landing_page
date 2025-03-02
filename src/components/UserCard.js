import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";

const UserCard = ({ user }) => {
  const getImageUrl = () => {
    if (
      !user.image ||
      user.image.includes("facebook") ||
      user.image.includes("sportague") ||
      user.image.includes("googleusercontent")
    ) {
      return user.gender === "male"
        ? "https://sportague.com/img/profiles/faf03acb-2a0f-4829-9d19-c489e88c145c.jpg"
        : "https://sportague.com/img/profiles/ac51cfa9-30ce-485e-b9fa-9ed6059bc4e6.jpg";
    }

    return `https://storage.revel.cool/img/profiles/${user.image}`;
  };

  return (
    <div className="w-full pb-4">
      <div className="flex items-center">
        <img
          src={getImageUrl()}
          alt="user_image"
          width={40}
          height={40}
          className="rounded-full mr-3"
        />
        <div className="flex flex-col">
          <div className="font-[600] flex items-center gap-x-2 text-md  text-gray-800">
            {user.name} {user.surnames}{" "}
            {user.gender === "male" ? (
              <FontAwesomeIcon icon={faMars} className="text-blue-500" />
            ) : user.gender === "female" ? (
              <FontAwesomeIcon icon={faVenus} className="text-pink-500" />
            ) : null}
            <span className="font-[400] text-sm">(you)</span>
          </div>
          <div className="text-gray-800 text-md font-[400] leading-tight">
            {user.user_name ? `@${user.user_name}` : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
