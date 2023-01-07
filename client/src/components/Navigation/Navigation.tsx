import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { NavContainer } from "./style/Navigation";
const Navigation = ()=> {
    return (
      <Fragment>
    <NavContainer>
          <input id="menu-toggle" type="checkbox" />
          <label className="menu-button-container" htmlFor="menu-toggle">
            <span className="menu-button"></span>
          </label>
          <ul className="menu">
            <li className="active"><a href="./index.html">Home</a></li>
            <li><a href="./pages/about.html">About</a></li>
            <li>
              <a href="./pages/collection.html">Collection</a>
              <ul className="dropdown">
                <li><a href="./pages/muscle-cars.html">Muscle Cars</a></li>
                <li><a href="./pages/suv-cars.html">Suv Cars</a></li>
                <li><a href="./pages/sports-cars.html">Sports Cars</a></li>
              </ul>
            </li>
            <li className="logo">Opulent Cars</li>
            <li><a href="./pages/shop.html">Shop</a></li>
            <li><a href="./pages/articles.html">Articles</a></li>
            <li><a href="./pages/contact.html">Contact</a></li>
          </ul>
        </NavContainer>
         <Outlet />
         </Fragment>
        )
}

export default Navigation;