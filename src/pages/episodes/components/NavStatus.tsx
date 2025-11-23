import { useState } from "react";
import { Link } from "react-router";

const ITEMS = ["All", "Alive", "Dead", "Unknown"] as const;

export const NavStatus = () => {
  const [active, setActive] = useState("All");

  return (
    <ul className="flex py-2 gap-2">
      {ITEMS.map((item) => (
        <li key={item}>
          <Link to={`/characters/${item.toLowerCase()}`}>
            <span
              onClick={() => setActive(item)}
              className={`
                animate-fadeIn px-2 py-1 rounded-full text-xs font-semibold cursor-pointer text-white border-blue-600 border-2 
                ${active === item ? "bg-blue-600" : "bg-transparent"}
              `}
            >
              {item}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
