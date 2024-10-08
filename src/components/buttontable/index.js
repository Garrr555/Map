import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faSeedling,
  faPeopleLine,
} from "@fortawesome/free-solid-svg-icons";
export default function Button() {
  const [userData, setUserData] = useState(false);
  return (
    <div className="relative inline-block text-left  ml-[88%]">
      <button
        onClick={() => (!userData ? setUserData(true) : setUserData(false))}
        id="dropdown-button"
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
      >
        Pilih
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 ml-2 -mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        id="dropdown-menu"
        className={`${
          !userData ? "hidden" : ""
        } origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
      >
        <div
          className="py-2 p-2"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-button"
        >
          <a
            className="flex block rounded-md px-4 py-2 gap-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
            role="menuitem"
          >
            <p>
              <FontAwesomeIcon icon={faPeopleGroup} />
            </p>
            Populasi
          </a>
          <a
            className="flex block rounded-md px-4 py-2 gap-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
            role="menuitem"
          >
            <p>
              <FontAwesomeIcon icon={faSeedling} />
            </p>
            Pertumbuhan
          </a>
          <a
            className="flex block rounded-md px-4 py-2 gap-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
            role="menuitem"
          >
            <p>
              <FontAwesomeIcon icon={faPeopleLine} />
            </p>
            Kepadatan
          </a>
        </div>
      </div>
    </div>
  );
}
