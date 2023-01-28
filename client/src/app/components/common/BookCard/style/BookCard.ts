import styled from "styled-components";
import Calendar from "react-calendar";

export const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  min-width: 330px;
  top: 2.8em;
  left: -2.5em;
  border-radius: 10px;
  z-index: 1;

  .react-calendar__navigation__arrow {
    border-radius: 10px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: white;
  padding: 1px 2px;
  color: black;
  width: 45%;
  height: 70px;
`;

export const SmallIcon = styled.span`
  margin-left: 5px;
  color: gray;
  font-size: x-small;
  user-select: none;
`;

export const ItemContainer = styled.div`
  display: flex;
  position: relative;
  font: small;
`;

export const Name = styled.span`
  color: gray;
  font: x-small;
  cursor: pointer;
  user-select: none;
`;

export const LineSeperator = styled.span`
  width: 2px;
  height: 45%;
  background-color: red;
  margin-left: 10px;
  margin-right: 10px;
`;

export const Icon = styled.span`
  color: red;
  margin-right: 5px;
  user-select: none;
`;
