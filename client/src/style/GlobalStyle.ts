import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  text-decoration: none;
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

// Custom Classes 
.hidden {
  display: none;
  transition: opacity 1s ease-out;
  opacity: 0;
}

.margin-top {
  margin-top: 50px;
}

/* Predefined Styled Components  */
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
