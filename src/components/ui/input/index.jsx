import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Input({
  label,
  name,
  type,
  placeholder,
  visible,
  handleVisible,
  defaultValue,
  disable,
}) {
  return (
    <div className="relative flex items-center border border-gray-300 rounded-lg">
      <input
        name={name}
        id={name}
        type={visible ? type : "text"}
        className="w-full bg-gray-100 p-2 focus:outline-none rounded-lg"
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disable}
      />
      {name === "password" && (
        <div
          onClick={handleVisible}
          className="absolute right-2 cursor-pointer text-primary"
        >
          <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} />
        </div>
      )}
    </div>
  );
}
