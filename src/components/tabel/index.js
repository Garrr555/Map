import { UserData } from "src/pages/Data";
import Button from "@components/buttontable";

export default function Table() {
  return (
    <div className="bg-white dark:bg-gray-300 w-11/12 m-auto rounded-lg mt-20 pb-10">
      <Button></Button>
      <div className="wrapper mt-5">
        <table className={`border-collapse table-auto text-sm w-11/12 m-auto`}>
          <thead className="blue2 text-slate-100 dark:bg-dark">
            <tr>
              <th className={`border border-gray-300 font-medium p-4 pb-3  `}>
                id
              </th>
              <th className={`border border-gray-300 font-medium p-4 pl-8  `}>
                year
              </th>
              <th className={`border border-gray-300 font-medium p-4 pb-3   `}>
                userGain
              </th>
              <th className={`border border-gray-300 font-medium p-4 pb-3   `}>
                userLost
              </th>
            </tr>
          </thead>
          <tbody>
            {UserData?.map((item) => (
              <tr key={item.id} className="text-center">
                <td className={`border border-gray-300 p-4 text-slate-500 dark:border-white`}>
                  <p>{item.id}</p>
                </td>
                <td className={`border border-gray-300 p-4 text-slate-500  dark:border-white`}>
                  <p>{item.year}</p>
                </td>
                <td className={`border border-gray-300 p-4 text-slate-500  dark:border-white`}>
                  <p>{item.userGain}</p>
                </td>
                <td className={`border border-gray-300 p-4 text-slate-500  dark:border-white`}>
                  <p> {item.userLost}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
