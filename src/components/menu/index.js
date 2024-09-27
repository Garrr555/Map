"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faList,
  faMap,
  faSun,
  faMoon,
  faPeopleRoof,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState, useEffect } from "react";
import { Contex } from "src/context/store";

export default function Menu() {
  const { menus, setMenu } = useContext(Contex);
  const [dark, setDark] = useState(false);

  // Fungsi untuk toggle dark mode
  const toggleDarkMode = () => {
    setDark(!dark);
    if (dark) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  // Menyimpan preferensi dark mode di local storage
  useEffect(() => {
    const darkModePreference = localStorage.getItem("dark-mode");
    if (darkModePreference === "true") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dark-mode", dark);
  }, [dark]);

  return (
    <div
      className={`w-96 h-screen text-slate-100 h-auto bg-primary dark:bg-dark ${menus}`}
    >
      <div>
        <div className="flex flex-row py-5 cursor-default">
          <p className="ui-font-serif font-semibold text-2xl text-center basis-1/6">
            <FontAwesomeIcon icon={faPeopleRoof} className="text-2xl"/>
          </p>
          <h3 className="ui-font-serif font-semibold text-xl basis-4/6">
            <Link href="/">
              <span className="pr-2">1</span>
              <span className="pr-2">P</span>
              <span className="pr-2">e</span>
              <span className="pr-2">a</span>
              <span className="pr-2">c</span>
              <span className="pr-2">e</span>
            </Link>
          </h3>
          <svg
            onClick={() => setMenu("hidden")}
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
            className="cursor-pointer ui-font-serif font-semibold text-xl text-center basis-1/6 m-auto"
          >
            <path
              onClick={() => setMenu("hidden")}
              fill="#f1f5f9"
              className="cursor-pointer"
              d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
            />
          </svg>
        </div>

        <hr />

        <div className="pt-4">
          <div className="toggledark">
            {/* Tombol untuk Dark Mode */}
            <button
              onClick={toggleDarkMode}
              className={`px-6 py-2  text-white rounded-md ${
                dark ? "bg-transparent" : "bg-transparent"
              }`}
            >
              {dark ? (
                <div className="flex flex-row items-center gap-4">
                  <p className="basis-1/6 text-center">
                    <FontAwesomeIcon icon={faMoon} />
                  </p>
                  <p className="basis-5/6">Dark</p>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <FontAwesomeIcon icon={faSun} />
                  <p>Light</p>
                </div>
              )}
            </button>
          </div>
          <div className="flex flex-row py-4 cursor-pointer">
            <p className="basis-1/6 text-center">
              <FontAwesomeIcon icon={faList} />
            </p>
            <Link href="/" className="basis-5/6">
              Menu
            </Link>
          </div>
          <div className="flex flex-row py-4 cursor-pointer">
            <p className="basis-1/6 text-center">
              <FontAwesomeIcon icon={faCompass} />
            </p>
            <Link href="/list" className="basis-5/6">
              list sensor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}