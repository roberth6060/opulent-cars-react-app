import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  background-color: #5b7071;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  padding: 1em;
  font-family: "Bodoni MT", Didot, "Didot LT STD", "Book Antiqua", Garamond,
    "Times New Roman", serif;

  .menu-button-container {
    background-color: #b3a18f;
    border-radius: 2px;
    display: none;
    height: 30px;
    width: 37px;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }

  #menu-toggle {
    display: none;
  }

  .menu-button,
  .menu-button::before,
  .menu-button::after {
    display: block;
    background-color: white;
    position: absolute;
    height: 4px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
  }

  .menu-button::before {
    content: "";
    margin-top: -8px;
  }

  .menu-button::after {
    content: "";
    margin-top: 8px;
  }

  #menu-toggle:checked + .menu-button-container .menu-button::before {
    margin-top: 0px;
    transform: rotate(405deg);
  }

  #menu-toggle:checked + .menu-button-container .menu-button {
    background: rgba(255, 255, 255, 0);
  }

  #menu-toggle:checked + .menu-button-container .menu-button::after {
    margin-top: 0px;
    transform: rotate(-405deg);
  }

  //Laptop View
  @media only screen and (max-width: $desktop) {
    .navbar {
      .logo {
        font-size: 20px;
      }
    }
    .menu {
      li {
        margin: 0 3px;
        padding: 3px;
        .dropdown {
          top: 36px;
          li {
            a {
              font-size: 14px;
            }
          }
        }
        a {
          font-size: 15px;
        }
      }
    }
  }

  //Tablet view
  @media (max-width: $laptop) {
    .logo {
      background-color: white !important;
      border-radius: 0 !important;
      color: #5b7071 !important;
    }
    .navbar {
      font-size: 13px;
      justify-content: right;

      .menu {
        li {
          margin: 0 3px;
          padding: 3px;
          position: static;
          .dropdown {
            position: absolute;
            top: 31px;
            width: 180px;
            padding: 0;
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            text-align: center;
            z-index: 12;
            li {
              a {
                font-size: 14px;
              }
            }
          }
          a {
            font-size: 15px;
          }
        }
      }
    }
    .menu-button-container {
      display: flex;
    }
    .menu {
      position: absolute;
      top: 56px;
      left: 0;
      flex-direction: column;
      width: 100%;
      justify-content: center;
    }
    #menu-toggle ~ .menu li {
      display: none;
      height: 0;
      margin: 0;
      padding: 0;
      border: 0;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    #menu-toggle:checked ~ .menu li {
      display: block;
      border: 1px solid #333;
      height: 2.5em;
      padding: 0.5em;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    .menu > li {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0.5em 0;
      width: 100%;
      color: red;
      background-color: #5b7071;
    }
    .menu > li:not(:last-child) {
      border-bottom: 1px solid #444;
    }

    .menu {
      li {
        &:hover:not(.active) {
          transform: skew(0deg);
          z-index: 3;
        }
      }

      .active {
        transform: skew(0deg);
        z-index: 2;
      }
    }
  }

  //Large phone view
  @media only screen and (max-width: $tablet) {
    .navbar {
      font-size: 13px;

      .logo {
        span {
          font-size: 15px;
        }
      }
    }
    .menu {
      li {
        margin: 0 3px;
        padding: 3px;
      }
    }
  }
`;

export const MenuButtonContainer = styled.label.attrs({ for: "menu-toggle" })`
  display: none;
  height: 100%;
  width: 30px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    display: flex;
    width: 40px;
    height: 40px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 90%;
  z-index: 2;
  ul {
    list-style-type: none;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: white;
    position: relative;
    padding: 5px 0;

    &:hover ul {
      display: block;
    }
  }

  a {
    position: relative;
    color: $linkColor;
    text-decoration: none;
    font-size: 18px;
    align-items: center;
  }

  a:visited {
    color: $linkColor;
    text-decoration: none;
  }

  a:hover {
    color: $linkColor;
    text-decoration: none;
  }
  a:before {
    content: "";
    position: absolute;
    width: 100%;
    margin: auto;
    height: 3px;
    bottom: -5px;
    background-color: $linkColor;
    visibility: hidden;
    transform: scaleX(0);
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }

  li.active > a:before,
  a:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
`;

export const DropDown = styled.ul`
  display: none;
  padding: 15px;
  position: absolute;
  width: 100%;
  background-color: #5b7071;
  top: 45px;

  & a:before {
    background-color: rgba(255, 255, 255, 0.467);
  }
`;

export const MenuButton = styled.span`
  &,
  &::before,
  &::after {
    display: block;
    background-color: #4e6c50;
    position: absolute;
    height: 4px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
  }
  &::before {
    content: "";
    margin-top: -8px;
  }
  &::after {
    content: "";
    margin-top: 8px;
  }
`;

export const MenuToggle = styled.input.attrs({
  id: "menu-toggle",
  type: "checkbox",
})`
  display: none;
  &:checked + ${MenuButtonContainer} ${MenuButton}::before {
    margin-top: 0px;
    transform: rotate(405deg);
  }
  &:checked + ${MenuButtonContainer} ${MenuButton} {
    background: rgba(255, 255, 255, 0);
  }
  &:checked + ${MenuButtonContainer} ${MenuButton}::after {
    margin-top: 0px;
    transform: rotate(-405deg);
  }

  @media screen and (max-width: 800px) {
    & ~ ${Menu} {
      display: none;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    &:checked ~ ${Menu} {
      display: block;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }
  }
`;

export const Logo = styled.li`
  font-size: 27px;
  background-color: rgba(255, 255, 255, 0.35);
  border-radius: 5px;
  font-family: "Rubik 80s Fade", cursive;
  font-weight: bold;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`;

export const NavLink = styled(Link)`
  color: white;
  list-style: none;
  display: flex;
  align-items: center;
`;
