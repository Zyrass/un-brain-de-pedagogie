import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <NavLink to="/">Un brain de pédagoie</NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/psychopedagogie">Psychopédagogie</NavLink>
          </li>
          <li>
            <NavLink to="/sophrologie">Sophrologie</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
