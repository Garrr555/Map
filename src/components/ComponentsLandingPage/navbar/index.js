import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faPeopleRoof } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  //Dark Mode
  const toggleDarkMode = () => {
    setDark(!dark);
    if (dark) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    const darkModePreference = localStorage.getItem("dark-mode");
    if (darkModePreference === "true") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }

    //Scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    localStorage.setItem("dark-mode", dark);
  }, [dark]);

  return (
    <div
      className={`z-10 flex justify-between items-center w-full h-20 px-10 py-4 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-opacity-10 shadow-lg bg-transparent"
          : ""
      } fixed top-0 left-0`}
    >
      <div className="flex gap-2 items-center">
        <p className="ui-font-serif font-bold text-xl text-center">
          <FontAwesomeIcon
            icon={faPeopleRoof}
            className="text-4xl dark:text-white"
          />
        </p>
        <h3 className="ui-font-serif font-bold">
          <Link href="/dashboard" className="text-2xl dark:text-white">
            <span className="pr-2">1</span>
            <span className="pr-2">P</span>
            <span className="pr-2">e</span>
            <span className="pr-2">a</span>
            <span className="pr-2">c</span>
            <span className="pr-2">e</span>
          </Link>
        </h3>
      </div>
      <div className="text-center flex items-center justify-center gap-4 ui-font-serif font-semibold text-lg">
        <div className="toggledark">
          <div
            onClick={toggleDarkMode}
            className="group w-full py-4 text-dark dark:text-white cursor-pointer"
          >
            {dark ? (
              <div className="flex flex-row items-center">
                <p className="basis-1/6 text-center">
                  <FontAwesomeIcon icon={faMoon} className="text-3xl" />
                </p>
              </div>
            ) : (
              <div className="flex items-center flex-row">
                <p className="basis-1/6 text-center">
                  <FontAwesomeIcon icon={faSun} className="text-3xl" />
                </p>
              </div>
            )}
          </div>
        </div>
        <Link
          href="/auth/login"
          className="hover:bg-dark/80 dark:hover:bg-primary/80  rounded-full py-2 w-24 transition-all duration-300 ease-in-out group"
        >
          <div className="text-black dark:text-white group-hover:text-white">Log in</div>
        </Link>
        <Link
          href="/list"
          className=" border border-dark dark:border-primary dark:hover:bg-primary/80 hover:bg-dark/80 bg-dark dark:bg-primary rounded-full transition-all duration-300 ease-in-out py-2 w-24"
        >
          <div className="text-white">Sign up</div>
        </Link>
      </div>
    </div>
  );
}
