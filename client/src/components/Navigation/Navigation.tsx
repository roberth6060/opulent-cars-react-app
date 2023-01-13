import { Fragment } from "react";
import {  Outlet } from "react-router-dom";
import { NavContainer, NavLink, Menu, DropDown, Logo, MenuButtonContainer, MenuToggle, MenuButton} from "./style/Navigation-style";

const Navigation = ()=> {
    return (
    <Fragment>
    <NavContainer>
          <MenuToggle />
          <MenuButtonContainer>
            <MenuButton></MenuButton>
          </MenuButtonContainer>
          <Menu>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li>
            <li><NavLink to="/collection">Collection</NavLink></li>
              <DropDown>
                <li><NavLink to ="/muscle">Muscle Cars</NavLink></li>
                <li><NavLink to ="/suv">Suv Cars</NavLink></li>
                <li><NavLink to ="/sports"></NavLink></li>
                <li><NavLink to ="/sports">Sports Cars</NavLink></li>
              </DropDown>
            </li>
            <Logo>Opulent Cars</Logo>
             <li><NavLink to ="/shop">Shop</NavLink></li>
             <li><NavLink to ="/articles">Articles</NavLink></li>
             <li><NavLink to ="/contact">Contact</NavLink></li>
          </Menu>
        </NavContainer>
         <Outlet />
         </Fragment>
        )
}

export default Navigation;