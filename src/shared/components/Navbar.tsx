import { useState } from "react";
import { Link } from "react-router";

const NAV_ITEMS = ["Characters", "Episodes"] as const;
export const Navbar = () => {
  const [active, setActive] = useState("Characters");

  return (
    <nav className="w-full ">
      <ul className="flex justify-between py-2 gap-2">
        {NAV_ITEMS.map((item) => (
          <li key={item} className="flex-1">
            <Link to={`/${item.toLowerCase()}`}>
              <button
                onClick={() => setActive(item)}
                className={`
                btn
                ${active === item ? "active" : ""}
              `}
              >
                {item}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
