import styled from "styled-components";
import { SpinnerContainer } from "../../Spinner/style/Spinner";

export const BaseButton = styled.button`
  border-radius: 5px;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.3s;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

export const ReadMoreButton = styled(BaseButton)`
  background-color: #efe3b1;
  border-radius: 29px;
  border: 1px solid #081f2d;
  color: #081f2d;
  font-size: 15px;
  height: 40px;
  padding: 10px 45px;
  &:hover {
    background-color: white;
    color: #081f2d;
    border-color: #081f2d;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: red;
  color: white;
  &:hover {
    background-color: transparent;
    border: red 1px solid;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;

export const BackButton = styled.button`
  display: inline-block;
  position: absolute;
  z-index: 1;
  padding: 0 10px 0 30px;
  left: -8px;
  top: 15px;

  &:active {
    top: 16px;
  }
  line-height: 44px;
  color: #000;
  text-decoration: none;
  font-size: 14px;

  &:before {
    content: "";
    position: absolute;
    box-sizing: border-box;
    left: 20px;
    right: 0;
    height: 34px;
    margin-top: 5px;
    z-index: -1;

    border: 1px solid #000;
    border-left-width: 0;
    border-radius: 5px;

    background: #fff;
  }

  &:after {
    content: "";

    position: absolute;
    box-sizing: border-box;
    left: 11px;
    height: 27px;
    width: 26px;
    top: 8px;
    z-index: -2;

    border: 1px solid #000;
    border-top: 0 transparent;
    border-right: 0 transparent;
    border-radius: 7px 5px 5px 7px;

    background: #fff;

    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
