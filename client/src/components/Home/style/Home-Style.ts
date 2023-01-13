import styled from "styled-components";

export const HomeContainer = styled.div`
  background-color: $bg-brown;

  ul {
    margin: 20px;
    list-style: none;
    display: inline-block;
    padding: 0;

    li {
      margin: auto;
    }
  }
  .social-media {
    margin: 20px;
    font-size: 30px;

    align-items: center;

    i {
      padding: 5px;
    }
  }

  //Button effect:
  .color:active {
    position: relative;
    top: 158px;
  }

  #about-section {
    h2 {
      margin-top: 0;
    }
    img {
      width: 350px;
      height: 350px;
      object-fit: cover;
      object-position: top left;
      margin-right: 30px;
    }
    .about-content {
      position: relative;
      display: inline-block;
    }
  }

  #collection-section {
    a {
      font-size: 35px;
      color: rgba(255, 255, 255, 0);
      // -webkit-transition: all 0.2s ease-in-out;
    }

    a:hover {
      color: $arrow-clr;
    }

    .grid-collection {
      display: grid;
      grid-template-areas:
        "collection1 collection2"
        "collection1  collection3";
      grid-template-rows: 250px 250px;
      grid-template-columns: 65% 35%;
      grid-gap: 12px;
      width: 100%;
      min-height: 0; /* NEW */
      min-width: 0; /* NEW; needed for Firefox */
      overflow: hidden;
      margin: 0 auto;
      .arrow-link {
        position: relative;
      }
      #category1 {
        grid-area: collection1;

        background-image: url("https://images.unsplash.com/photo-1588127333419-b9d7de223dcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100%;
        object-fit: cover;

        span {
          position: absolute;
          bottom: 70px;
        }
        &:after {
          content: "\2192";
          display: inline-block;
          z-index: 1;
          font-size: 180px;
          font-family: "Times New Roman", Times, serif;
          color: $arrow-clr;
          margin-left: 25px;
          position: absolute;
          bottom: 0;
          -webkit-transition: all 0.2s ease-in-out;
        }

        &:hover:after {
          transform: translateX(150px);
        }
      }
      #category2 {
        grid-area: collection2;
        span {
          position: absolute;
          bottom: 38px;
        }
        width: 100%;
        height: 100%;
        background-image: url("https://images.unsplash.com/photo-1563720223523-491ff04651de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        object-fit: cover;

        &:after {
          z-index: 1;
          font-size: 140px;
          font-family: "Times New Roman", Times, serif;
          position: relative;
          content: "\2192";
          color: $arrow-clr;
          margin-left: 18px;
          top: 100px;
          display: inline-block;
          -webkit-transition: all 0.2s ease-in-out;
        }

        &:hover:after {
          transform: translateX(110px);
        }
      }
      #category3 {
        grid-area: collection3;
        span {
          position: absolute;
          bottom: 38px;
        }
        width: 100%;
        height: 100%;
        background-image: url("https://images.unsplash.com/photo-1614377284368-a6d4f911edc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        object-fit: cover;
        &:after {
          font-size: 140px;
          z-index: 1;
          font-family: "Times New Roman", Times, serif;
          position: relative;
          content: "\2192";
          color: $arrow-clr;
          margin-left: 18px;
          top: 100px;
          display: inline-block;
          -webkit-transition: all 0.2s ease-in-out;
        }

        &:hover:after {
          transform: translateX(145px);
        }
      }
    }
  }

  #featured-section {
    background-color: $bg-brown;
    .row {
      img {
        width: 40%;
        height: 400px;
        object-fit: cover;
        object-position: center;
      }
      div {
        h2 {
          margin: 0;
        }
        width: 60%;
      }
    }
    .lamborghini {
      margin-left: 20px;
    }
    .ferrari {
      margin-right: 20px;
    }
    .ferrari-row {
      flex-direction: row-reverse;
    }
  }

  #location-section {
    .container {
      #map {
        width: 80%;
        height: 700px;
        min-height: auto;
      }
    }
  }

  //Laptop View
  @media only screen and (max-width: $desktop) {
    .arrow-link {
      position: relative;
      span {
        font-size: 30px;
      }
      &:after {
        font-size: 140px !important;
        margin-left: 10px !important;
      }
    }
    #category1 {
      span {
      }
      &:after {
        font-size: 170px !important;
      }
    }
    #category2 {
      span {
        // top: 30% !important;
      }
      &:after {
        top: 105px !important;
      }
    }
    #category3 {
      &:after {
        top: 105px !important;
      }

      &:hover:after {
        transform: translateX(140px) !important;
      }
    }

    #location-section {
      .container {
        #map {
          width: 90%;
          height: 600px;
          min-height: auto;
        }
      }
    }
  }

  //tablet View
  @media only screen and (max-width: $laptop) {
    #home-header {
      height: 580px;
      position: relative;
      .color-picker {
        top: 80px;
      }
    }
    #featured-section {
      .row {
        margin: auto;
        width: 70%;
        img {
          width: 100%;
        }
        div {
          width: 100%;
          margin: 0;
        }
      }
    }
    .arrow-link {
      position: relative;
      span {
        font-size: 25px !important;
      }
      &:after {
        font-size: 100px !important;
        margin-left: 5px !important;
      }

      &:hover:after {
        transform: translateX(90px) !important;
      }
    }
    #category1 {
      &:after {
        font-size: 130px !important;
        top: 345px !important;
      }
      &:hover:after {
        transform: translateX(125px) !important;
      }
    }
    #category2 {
      &:after {
        top: 135px !important;
      }
    }
    #category3 {
      &:after {
        top: 135px !important;
      }
      &:hover:after {
        transform: translateX(115px) !important;
      }
    }

    .color-picker {
      text-align: center;
      position: relative;
      top: 150px;

      h3 {
        font-size: 20px !important;
      }
      .colors {
        position: relative;
        width: 26px !important;
        height: 26px !important;
        background-color: white;
        border-radius: 100%;
        border-style: solid;
        margin: 10px;
      }
    }
  }

  //Large Phone View
  @media only screen and (max-width: $tablet) {
    #home-header {
      height: 480px;
      position: relative;
      .color-picker {
        top: 30px;
      }
    }
    .grid-collection {
      grid-template-areas:
        "collection1"
        "collection2"
        "collection3" !important;
      grid-template-rows: 250px 250px 250px !important;
      grid-template-columns: 1fr !important;
    }

    #featured-section {
      .row {
        margin: auto;
        width: 100%;
      }
    }

    #location-section {
      .container {
        #map {
          width: 100%;
          height: 400px;
        }
      }
    }

    .arrow-link {
      position: relative;
      span {
        top: 202px;
        font-size: 25px !important;
      }
      &:after {
        font-size: 130px !important;
        margin-left: 5px !important;
        top: 135px !important;
      }
      &:hover:after {
        transform: translateX(90px) !important;
      }
    }
    #category1 {
      &:after {
        top: 135px !important;
      }
    }
  }

  //Phone View
  @media only screen and (max-width: $phone) {
    h3 {
      font-size: 18px !important;
    }
    #home-header {
      height: 480px;
      position: relative;
      .color-picker {
        margin: 0 !important;
      }
    }
  }
`;

export const HomeHeader = styled.div`
  background-image: url("https://i.ibb.co/25Ysz4P/orange-car.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 700px;
  min-height: auto;
  color: aliceblue;
  /* transition: all 0.6s ease-in; */
  p {
    padding-bottom: 5px;
  }
`;

export const colorPicker = styled.div`
  text-align: center;
  position: relative;
  top: 100px;

  h3 {
    font-size: 25px;
  }
  .colors {
    position: relative;
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 100%;
    border-style: solid;
    margin: 10px;
    cursor: pointer;
    &:nth-child(1) {
      background-color: orangered;
      &:active {
        top: 1px;
      }
    }
    &:nth-child(2) {
      background-color: blue;
      &:active {
        top: 1px;
      }
    }
    &:nth-child(3) {
      background-color: yellow;
      &:active {
        top: 1px;
      }
    }
    &:nth-child(4) {
      background-color: green;
      &:active {
        top: 1px;
      }
    }
  }
`;
