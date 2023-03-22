import styled from "styled-components";
import { Link } from "react-router-dom";
import ImageHeader from "../../../assets/images/orange-car.jpg";
import ImageSuv from "../../../assets/images/photo-1563720223523-491ff04651de.avif";
import ImageMuscle from "../../../assets/images/photo-1588127333419-b9d7de223dcf.avif";
import ImageSports from "../../../assets/images/photo-1614377284368-a6d4f911edc7.avif";
import CEOImage from "../../../assets/images/ceo.avif";

/**
 * Header Section
 */
export const SubTitle = styled.h2``;
export const HomeHeader = styled.div`
  background-image: url(${ImageHeader});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 700px;
  min-height: auto;
  color: aliceblue;
`;
/**
 * About Section
 */
export const AboutImage = styled.img.attrs({ src: CEOImage, alt: "CEO" })`
  width: 25%;
  height: 24rem;
  object-fit: cover;
  object-position: top left;
  align-items: center;
`;

export const AboutConent = styled.div`
  width: 75%;
  position: relative;
  padding: 0 2rem;
  display: inline-block;
`;

/**
 * Collection Section
 */
export const GridLayout = styled.div`
  display: grid;
  grid-template-areas:
    "collection1 collection2"
    "collection1  collection3";
  grid-template-rows: 250px 250px;
  grid-template-columns: 65% 35%;
  grid-gap: 12px;
  width: 100%;
  min-height: 0;
  min-width: 0;
  overflow: hidden;
  margin: 0 auto;
  .arrow-link {
    position: relative;
  }
`;

export const Main = styled(Link)`
  grid-area: collection1;
  background-image: url(${ImageMuscle});
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
`;
export const AsideTop = styled(Link)`
  grid-area: collection2;
  span {
    position: absolute;
    bottom: 38px;
  }
  width: 100%;
  height: 100%;
  background-image: url(${ImageSuv});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
`;
export const AsideBottom = styled(Link)`
  grid-area: collection3;
  span {
    position: absolute;
    bottom: 38px;
  }
  width: 100%;
  height: 100%;
  background-image: url(${ImageSports});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
`;

export const CollectionSection = styled.section`
  a {
    font-size: 35px;
    color: rgba(255, 255, 255, 0);
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
`;

export const ArticlesSection = styled.section`
  background-color: #b3a18f;
`;

export const FeaturedSection = styled.section`
  background-color: #b3a18f;
`;
export const HomeContainer = styled.div`
  .book-ride {
    display: flex;
    justify-content: center;
    position: relative;
    top: 100px;
  }
  .button-container {
    display: flex;
    gap: 5px;
    margin-bottom: 10px;
  }

  ul {
    margin: 20px;
    list-style: none;
    display: inline-block;
    padding: 0;
    li {
      margin: auto;
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
  /* //Laptop View
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
  } */
`;
