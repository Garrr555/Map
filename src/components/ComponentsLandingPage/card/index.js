import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleRoof } from "@fortawesome/free-solid-svg-icons";

const cards = [
  {
    icon: faPeopleRoof,
    title: "pppppppppppppppppppppppppp pppppppppppppppppp",
    description:
      "pppppppppppppppppppppppppppp ppppppppppppppppppppppp pppppppppppppppppppppppppppppp pppppppppppppppppp",
  },
  {
    icon: faPeopleRoof,
    title: "pppppppppppppppppppppppppp pppppppppppppppppp",
    description:
      "pppppppppppppppppppppppppppp ppppppppppppppppppppppp pppppppppppppppppppppppppppppp pppppppppppppppppp",
  },
  {
    icon: faPeopleRoof,
    title: "pppppppppppppppppppppppppp pppppppppppppppppp",
    description:
      "pppppppppppppppppppppppppppp ppppppppppppppppppppppp pppppppppppppppppppppppppppppp pppppppppppppppppp",
  },
];

function CardSection() {
  return (
    <div className="flex flex-wrap justify-between px-40">
      {cards.map((card, index) => (
        <div key={index} className="w-80 h-full">
          <FontAwesomeIcon
            icon={card.icon}
            className="text-5xl dark:text-white"
          />
          <p className="text-lg font-semibold mb-3 mt-7">{card.title}</p>
          <p className="text-md text-gray-500">{card.description}</p>
        </div>
      ))}
    </div>
  );
}

export default CardSection;
