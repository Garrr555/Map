import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "src/context/themeContext";

export default function AuthLayout({ link, linkText, title, textColor, children, linkPage }) {

    const { darkMode } = useContext(ThemeContext);

  return (
    <div className="font-serif bg-black dark:bg-gray-400 dark:bg-opacity-30 bg-opacity-30 rounded-lg  shadow-lg">
      <h1 className="text-center my-2 font-bold text-[40px] text-white">
        {title}
      </h1>
      {/* {error && (
        <div className="text-red-500 text-center text-[20px]">{error}</div>
      )} */}
      <div className={` px-3 py-5 w-96 ${textColor}`}>{children}</div>

      <p className="text-center my-5 text-white font-light">
        {linkText}
        <span className="text-white font-semibold cursor-pointer">
          <Link href={link}> {linkPage}</Link>
        </span>
      </p>
    </div>
  );
}
