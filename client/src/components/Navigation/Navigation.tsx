import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { NavContainer, NavLink } from "./style/Navigation-style";

const Navigation = ()=> {
    return (
      <Fragment>
    <NavContainer>
          <input id="menu-toggle" type="checkbox" />
          <label className="menu-button-container" htmlFor="menu-toggle">
            <span className="menu-button"></span>
          </label>
          <ul className="menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to ="/about">About</NavLink>
            <li>
            <NavLink to ="/collection">Collection</NavLink>
              <ul className="dropdown">
                <li><a href="./pages/muscle-cars.html">Muscle Cars</a></li>
                <li><a href="./pages/suv-cars.html">Suv Cars</a></li>
                <li><a href="./pages/sports-cars.html">Sports Cars</a></li>
              </ul>
            </li>
            <li className="logo">Opulent Cars</li>
            <NavLink to ="/shop">Shop</NavLink>
            <NavLink to ="/articles">Articles</NavLink>
             <NavLink to ="/contact">Contact</NavLink>
          </ul>
        </NavContainer>
         <Outlet />
         </Fragment>
        )
}

export default Navigation;