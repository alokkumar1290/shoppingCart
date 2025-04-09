import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex flex-col items-center sm:items-start sm:flex-row justify-center gap-8 uppercase font-bold text-sm">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/headphones">Headphones</NavLink>
        </li>
        <li>
          <NavLink to="/speakers">Speakers</NavLink>
        </li>
        <li>
          <NavLink to="/earphones">Earphones</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
