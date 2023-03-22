import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 80%;
  height: 100%;
  padding: 40px 0;
`;

export const FlexRow = styled.div`
  display: flex !important;
  flex-wrap: wrap;
  flex-direction: row !important;
  justify-content: center;
  min-height: auto;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 0;
`;
