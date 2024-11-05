import Menu from "@components/menu";
import LineChart from "@components/linebar";
import Menubar from "@components/menubtn";
import Table from "@components/tabel";
import { UserData } from "./Data";
import { useState } from "react";
import LandingPage from "@components/ComponentsLandingPage/LandingPage";

export default function Home() {
  return (
    <div>
      <div style={{ width: "100%", height: "100%" }}>
        <LandingPage></LandingPage>
      </div>

    </div>
  );
}
