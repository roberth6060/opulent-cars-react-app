import styled from "styled-components";
import Button from "../../Button/Button";

export const CarContainer = styled.div`
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  width: 16.5em;
  min-height: 22.2em;
  max-height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4px;
  background-color: white;
  border-radius: 10px;
  margin: 10px;
`;

export const CarThumbnail = styled.div`
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const CarName = styled.h3`
  font-size: 1rem; /* 16px */
  line-height: 1.5rem; /* 24px */
  font: bold;
  color: black;
  margin-top: 1px;
  margin-bottom: 1px;
`;

export const PricesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3px;
`;

export const DailyPrice = styled.h5`
  color: red;
  font: bold;
  font-size: small;
  margin-right: 3px;
`;

export const MonthPrice = styled.h5`
  color: gray;
  font: bold;
  font-size: small;
  margin-right: 3px;
`;

export const SmallIcon = styled.span`
  color: gray;
  font: small;
  margin-right: 1px;
`;

export const CarDetailsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const CarDetail = styled.div`
  display: flex;
  align-items: center;
`;

export const CarInfo = styled.h6`
  color: gray;
  font-size: x-small;
`;

export const Seperator = styled.div`
  min-width: 100%;
  min-height: 1px;
  display: flex;
  background-color: gray;
  margin-top: 2px;
  margin-bottom: 2px;
`;

export const SmallText = styled.p`
  color: inherit;
  font-size: 0.75rem; /* 12px */
  line-height: 1rem; /* 16px */
  font-weight: 100;
`;
