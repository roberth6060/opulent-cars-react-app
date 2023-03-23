import styled from "styled-components";
import { bgClrLight } from "../../../style/variables";

export const CollectionContainer = styled.div`
  background-color: ${bgClrLight};
  width: 100%;
  margin: auto;

  box-sizing: border-box;
  display: grid;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  padding: 1rem 2rem;

  .car-card {
    background-color: #fff;
    box-shadow: 0px 4px 8px #ededed;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 1fr 3fr 1fr;
    height: 400px;
    padding: 10px 45px;
    transition: 0.5s ease;
    width: 100%;
  }

  .car-card img {
    max-width: 350px;
    object-fit: contain;
    place-self: center;
    transition: 0.5s ease;
    width: 100%;
  }

  .car-card ul {
    color: #bababa;
    display: flex;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    justify-content: space-between;
    list-style-type: none;
    width: 100%;
    align-content: center;
  }

  .car-card li {
    text-align: center;
  }

  .car-card h2 {
    align-self: center;
    color: #000;
    font-family: roboto, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
  }

  /* hover effect */
  .car-link {
    text-decoration: none;
    transition: 0.5s ease;
  }

  .car-link:hover .car-card {
    box-shadow: 0px 6px 8px #d9d9d9;
    transition: 0.5s ease;
  }

  .car-link:hover img {
    transform: scale(1.05);
    transition: 0.5s ease;
  }

  @media (max-width: 700px) {
    .card-container {
      grid-column-gap: 50px;
      grid-row-gap: 50px;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }

    .car-card h2 {
      font-size: 18px;
      line-height: 20px;
    }

    .car-card ul {
      font-size: 14px;
    }
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 18px;
      text-align: center;
    }

    .car-card ul {
      flex-direction: column;
    }

    .car-card li {
      margin-bottom: 5px;
    }

    li:nth-child(2) {
      margin: 0 0 5px;
    }
  }
`;
