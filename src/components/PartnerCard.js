import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMars,
  faVenus,
  faXmark,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

const PartnerCard = ({ partner, deletePartner }) => {
  return (
    <div className="w-full pb-4 ">
      <div className="flex items-center">
        <img
          src={
            partner.image.url.includes("sportague") ||
            partner.image.url.includes("googleusercontent") ||
            (partner.image.url.includes("facebook") &&
              partner.gender === "male")
              ? "https://sportague.com/img/profiles/faf03acb-2a0f-4829-9d19-c489e88c145c.jpg"
              : partner.image.url.includes("facebook") &&
                partner.gender === "female"
              ? "https://sportague.com/img/profiles/ac51cfa9-30ce-485e-b9fa-9ed6059bc4e6.jpg"
              : `https://storage.revel.cool/img/profiles/${partner.image.url}`
          }
          alt="partner_image"
          width={40}
          height={40}
          className="rounded-full mr-4"
        />
        <div className="w-full">
          <div className="flex items-center justify-between">
            <p className="font-semibold flex items-center gap-2 text-gray-800 text-md">
              {partner.full_name}
              {partner.gender === "male" ? (
                <FontAwesomeIcon icon={faMars} className="text-blue-500" />
              ) : partner.gender === "female" ? (
                <FontAwesomeIcon icon={faVenus} className="text-pink-500" />
              ) : null}
            </p>
            {deletePartner && (
              <FontAwesomeIcon
                className="cursor-pointer text-gray-700"
                icon={faXmark}
                size="xl"
                onClick={deletePartner}
              />
            )}
          </div>
          <p className="text-gray-600 leading-tight">
            {partner.user_name ? `@${partner.user_name}` : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;
