import styled from "styled-components";

export const FeaturedCarsContainer = styled.div`
  display: flex;
  max-width: 1024px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  margin-right: 4px;
  margin-bottom: 10px;
  margin: auto;
`;

export const CarsContainer = styled.div`
  max-width: 1024px;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 7px;

  ul {
    display: flex;
  }
`;
