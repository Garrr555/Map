import Menu from "@components/menu";
import LineChart from "@components/linebar";
import Menubar from "@components/menubtn";
import Table from "@components/tabel";
import { UserData } from "../Data";
import { useState } from "react";
import LandingPageCoba from "@components/ComponentsLandingPage/LandingPage";

export default function Dashboard() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [marginClass, setMarginClass] = useState("");
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Populasi",
        data: UserData.map((data) => data.population),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderWidth: 2,
      },
    ],
  });
  const [userData1, setUserData1] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Pertumbuhan",
        data: UserData.map((data) => data.growthRate),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "rgba(75,192,192)",
        backgroundColor: "rgba(75,192,192,0.5)",
        borderWidth: 2,
      },
    ],
  });
  const [userData2, setUserData2] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Kepadatan",
        data: UserData.map((data) => data.density),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderWidth: 2,
      },
    ],
  });
  const [userData3, setUserData3] = useState(false);

  return (
    <div>
      <div
        style={{ width: "100%", height: "100%" }}
        className={`w-auto h-auto flex  dark:bg-gray-300 overflow-hidden transition-all duration-300 ease-in-out ${
          menuVisible ? marginClass : "pl-0"
        }`}
      >
        {menuVisible && <Menu menuVisible={setMenuVisible} />}

        <div className="w-full h-full pb-52">
          <div className="mb-10">
            <p className="text-3xl font-semibold pt-10 text-center text-current text-gray-500 dark:text-secondary">
              Dashboard
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="w-auto h-auto basis-1/4 m-auto">
              <LineChart chartData={userData} />
            </div>
            <div className="w-auto h-auto basis-1/4 m-auto">
              <LineChart chartData={userData1} />
            </div>
            <div className="w-auto h-auto basis-1/4 m-auto">
              <LineChart chartData={userData2} />
            </div>
          </div>
          <Table></Table>
        </div>
        <div className={`${menuVisible ? "hidden" : ""}`}>
          <Menubar
            menuVisible={setMenuVisible}
            margin={setMarginClass}
          ></Menubar>
        </div>
      </div>
    </div>
  );
}
