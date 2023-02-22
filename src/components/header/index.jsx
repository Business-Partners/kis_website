import { Link } from "react-router-dom";
import { HeaderTag } from "./styles";
import { logo } from "../../assets";

function Header() {
  return (
    <HeaderTag>
      <Link to="/">
        <img src={logo} alt="Logo Kis" />
        <strong> KIS </strong>
      </Link>

      <nav>
        <ul>
          <li>
            <a href="/#"> Kis App </a>
            <ul>
              <li>
                <Link to="/"> KIS Dektop </Link>
              </li>
              <li>
                <Link to="/"> Kis Mobile </Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#about"> Sobre </a>
          </li>
          <li>
            <a href="#prices"> Preços </a>
          </li>
          <li>
            <a href="#contacts"> Contactos </a>
          </li>
          <li>
            <Link to="/docs"> Docs </Link>
          </li>
        </ul>
      </nav>

      <div>
        <Link to="/buy"> Comprar </Link>
      </div>
    </HeaderTag>
  );
}

export default Header;
