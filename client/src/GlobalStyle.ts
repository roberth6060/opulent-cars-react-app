import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  text-decoration: none;
}
body::after {
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  z-index: -1;
  content: url("https://i.ibb.co/25Ysz4P/orange-car.png")
    url("https://i.ibb.co/FBFqc6r/blue-car.png")
    url("https://i.ibb.co/xg2T2BC/yellow-car.png")
    url("https://i.ibb.co/MnwtyXG/green-car.png");
}

html,
body {
  margin: 0;
  padding: 0;
}
figure {
  margin: 0;
}

h1 {
  font-size: 60px;
}
h2 {
  font-size: 40px;
}
p {
  line-height: 1.5;
}
.container {
  position: relative;
  margin: 0 auto;
  width: 80%;
  height: 100%;
  padding: 40px 0;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 15px 0;
  min-height: auto;
}

.flex-wrap {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  padding: 15px 0;

  img {
    margin-right: 15px;
  }
}

.col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 0;

  img {
    margin-right: 15px;
  }
}

.hidden {
  display: none;
  transition: opacity 1s ease-out;
  opacity: 0;
}

.margin-top {
  margin-top: 50px;
}

//Tablet view
@media (max-width: $desktop) {
  .container {
    width: 90%;
  }
}

//Tablet view
@media only screen and (max-width: $laptop) {
  h1 {
    font-size: 45px;
  }
  h2 {
    font-size: 35px;
  }

  .container {
    width: 95%;
  }
  .row {
    flex-wrap: wrap;
    & > img {
      margin-bottom: 15px;
    }
  }
}

//Phone View
@media only screen and (max-width: $phone) {
  h1 {
    font-size: 38px;
  }
  h2 {
    font-size: 28px;
  }
}

 `;

export default GlobalStyle;
