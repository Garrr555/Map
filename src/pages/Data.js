export const UserData = [
  {
    id: 1,
    year: 2016,
    population: 23507880,
    density: 12567, // Kepadatan penduduk per km²
    growthRate: 1.42, // Tingkat pertumbuhan populasi dalam persen
  },
  {
    id: 2,
    year: 2017,
    population: 24006750,
    density: 12700,
    growthRate: 1.45,
  },
  {
    id: 3,
    year: 2018,
    population: 24500000,
    density: 12900,
    growthRate: 1.38,
  },
  {
    id: 4,
    year: 2019,
    population: 25005000,
    density: 13100,
    growthRate: 1.45,
  },
  {
    id: 5,
    year: 2020,
    population: 25500000,
    density: 13200,
    growthRate: 1.3,
  },
];

export const LocationData = [
  {
    name: "Semarang",
    position: [-6.9932, 110.4203], // Koordinat Semarang
    density: 9800,
    population: 1621000,
    growth: 1.22,
  },
  {
    name: "Purwokerto",
    position: [-7.3788034, 109.2452397],
    density: 15000,
    population: 1800500,
    growth: 1.25,
  },
  {
    name: "Jakarta",
    position: [-6.2087634, 106.845599],
    density: 15270,
    population: 10532000,
    growth: 1.02,
  },
  {
    name: "Surabaya",
    position: [-7.257472, 112.75209],
    density: 8500,
    population: 2975000,
    growth: 0.93,
  },
  {
    name: "Bandung",
    position: [-6.914744, 107.60981],
    density: 14450,
    population: 2585000,
    growth: 1.11,
  },
  {
    name: "Makassar",
    position: [-5.147665, 119.432732],
    density: 8500,
    population: 1420000,
    growth: 1.35,
  },
  {
    name: "Manado",
    position: [1.455554, 124.826881],
    density: 7250,
    population: 451000,
    growth: 1.23,
  },
  {
    name: "Palangkaraya",
    position: [-0.789275, 113.921327],
    density: 1250,
    population: 260000,
    growth: 1.48,
  },

  {
    name: "Kendari",
    position: [-3.995276, 122.512974],
    density: 5200,
    population: 345000,
    growth: 1.42,
  },
  {
    name: "Palembang",
    position: [-2.916733, 104.745814],
    density: 11000,
    population: 1603000,
    growth: 1.36,
  },
  {
    name: "Malang",
    position: [-7.96662, 112.632629],
    density: 9500,
    population: 860000,
    growth: 1.1,
  },
];


export default function Data() {
  return (
    <div className="bg-white dark:bg-gray-300 w-11/12 m-auto rounded-lg mt-20 pb-10">
      <h1 className="text-3xl font-bold text-center">Data</h1>
    </div>
  );
}
