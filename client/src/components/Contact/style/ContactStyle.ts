import styled from "styled-components";
import { bgClrLight } from "../../../style/variables";

export const ContactContainer = styled.div`
  background-color: ${bgClrLight};
  button,
  input,
  select,
  textarea {
    color: #f2f3eb !important;
    font: inherit;
    margin: 0;
  }

  input {
    line-height: normal;
  }

  textarea {
    overflow: auto;
  }

  #contact-container {
    background-color: #5b7071;
    max-width: 768px;
    margin: 60px auto;
    position: relative;
  }

  form {
    padding: 37.5px;
    margin: 50px 0;
  }

  .underline {
    border-bottom: solid 2px #474544;
    margin: -0.512em auto;
    width: 80px;
  }

  .icon_wrapper {
    margin: 50px auto 0;
    width: 100%;
  }

  .email {
    float: right;
    width: 45%;
  }

  input[type="text"],
  [type="email"],
  select,
  textarea {
    background: none;
    border: none;
    border-bottom: solid 2px #ffffff66;
    color: #f2f3eb;
    font-size: 1em;
    font-weight: 400;
    letter-spacing: 1px;
    margin: 0em 0 1.875em 0;
    padding: 0 0 0.875em 0;
    text-transform: uppercase;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  input[type="text"]:focus,
  [type="email"]:focus,
  textarea:focus {
    outline: none;
    padding: 0 0 0.875em 0;
  }

  .message {
    float: none;
  }

  .name {
    float: left;
    width: 45%;
  }

  select {
    background: url("https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-down-32.png")
      no-repeat right;
    outline: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  select::-ms-expand {
    display: none;
  }

  .subject {
    width: 100%;
  }

  .telephone {
    width: 100%;
  }

  textarea {
    line-height: 150%;
    height: 150px;
    resize: none;
    width: 100%;
  }

  ::-webkit-input-placeholder {
    // color: #474544;
    color: #f2f3eb;
  }

  :-moz-placeholder {
    color: #474544;
    opacity: 1;
  }

  ::-moz-placeholder {
    color: #474544;
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: #474544;
  }

  #form_button {
    background: none;
    border: solid 2px #474544;
    color: #fffdfc;
    cursor: pointer;
    display: inline-block;
    font-family: "Helvetica", Arial, sans-serif;
    font-size: 0.875em;
    font-weight: bold;
    outline: none;
    padding: 20px 35px;
    text-transform: uppercase;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  #form_button:hover {
    background: #474544;
    color: #f2f3eb;
  }

  @media screen and (max-width: 768px) {
    #container {
      margin: 20px auto;
      width: 95%;
    }
  }

  @media screen and (max-width: 480px) {
    h1 {
      font-size: 26px;
    }

    .underline {
      width: 68px;
    }

    #form_button {
      padding: 15px 25px;
    }
  }

  @media screen and (max-width: 420px) {
    h1 {
      font-size: 18px;
    }

    .icon {
      height: 35px;
      width: 35px;
    }

    .underline {
      width: 53px;
    }

    input[type="text"],
    [type="email"],
    select,
    textarea {
      font-size: 0.875em;
    }
  }
`;
