import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: white;
  padding: 1px 2px;
  color: black;
  width: 45%;
  height: 70px;
`;

export const ItemContainer = styled.div`
  display: flex;
  font: small;
`;

export const Name = styled.span`
  color: gray;
  font: x-small;
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
`;
