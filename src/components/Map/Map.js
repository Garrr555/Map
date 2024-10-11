import dynamic from "next/dynamic";
import Menu from "@components/menu";
import Legen from "@components/legend";
import Menubar from "@components/menubtn";
import { useState } from "react";
const DynamicMap = dynamic(() => import("./DynamicMap"), {
  ssr: false,
});



export default function Map (props) {

  const [menuVisible, setMenuVisible] = useState(false);
  const [marginClass, setMarginClass] = useState("");

  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      className={`w-auto h-auto flex bg-[#f2efe9]  ${
        menuVisible ? marginClass : "pl-0"
      }`}
    >
      {menuVisible && <Menu menuVisible={setMenuVisible} />}
      <DynamicMap {...props} className={"z-0 -ml-4"} />
      <Legen />
      <div className={`${menuVisible ? "hidden" : ""}`}>
        <Menubar menuVisible={setMenuVisible} margin={setMarginClass}></Menubar>
      </div>
    </div>
  );
};


