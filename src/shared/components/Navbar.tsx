import { useState } from "react";
import { Link } from "react-router";

const NAV_ITEMS = [
  {
    name: "Characters",
    path: "characters/all",
  },
  {
    name: "Episodes",
    path: "episodes",
  },
] as const;

const DEFAULT_TAB = NAV_ITEMS[0].name;

export const Navbar = () => {
  const [active, setActive] = useState<string>(DEFAULT_TAB);

  return (
    <nav className="w-full ">
      <ul className="flex justify-between py-2 gap-2">
        {NAV_ITEMS.map((item) => (
          <li key={item.path} className="flex-1">
            <Link to={`/${item.path.toLowerCase()}`}>
              <button
                onClick={() => setActive(item.name)}
                className={`
                btn
                ${active === item.name ? "active" : ""}
              `}
              >
                {item.name}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
