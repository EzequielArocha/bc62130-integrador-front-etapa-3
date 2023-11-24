import { Link } from "react-router-dom";
import "./Header.scss";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="main-header">
      <input type="checkbox" id="menu" />
      <Navbar />
      <div className="search-bar">
        <Link className="search-bar__logo-container" to="/">
          <img src="img/logo.png" alt="BuyTechX" />
        </Link>
        <form action="" className="search-bar__form-container">
          <label htmlFor="busqueda" className="search-bar__form-label"></label>
          <input
            type="search"
            className="search-bar__form-search"
            id="busqueda"
            placeholder="  ¿Qué estas Buscando?"
          />
          <input
            type="submit"
            value="BUSCAR"
            className="search-bar__form-submit"
          />
        </form>
        <Link className="search-bar__carrito-container" to="/carrito">
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
        <div className="menu-toggle">
          <label htmlFor="menu" className="menu-toggle__label">
            <span className="menu-toggle__top-bread"></span>
            <span className="menu-toggle__meat"></span>
            <span className="menu-toggle__bottom-bread"></span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
