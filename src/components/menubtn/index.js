import { useContext } from "react";
import { Contex } from "src/context/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Menubar({ margin, menuVisible }) {
  // Terima setMargin sebagai prop
  const { menus, setMenu } = useContext(Contex);

  return (
    <div
      className={`fixed top-8 right-8 rounded-md cursor-pointer p-4 z-10 bg-primary dark:bg-dark dark:bg-darkrounded-md ${
        menus ? "" : "hidden"
      }`}
      onClick={() => {
        setMenu("block");
        menuVisible(true);
        margin("pl-[300px]"); // Set margin ketika ikon diklik
      }}
    >
      <p className="text-white">
        <FontAwesomeIcon icon={faBars} />
      </p>
    </div>
  );
}
