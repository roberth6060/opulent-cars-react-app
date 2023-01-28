import styled from "styled-components";

export const BaseButton = styled.button`
  padding: 5px 3px;
  outline: none;
  border-radius: 6px;
  color: white;
  border: transparent;
  font-weight: bold;
  border: solid;

  &:focus {
    outline: none;
  }
  transition: all 200 ease-in-out;
  margin: 1px;
`;

export const OutLinedButton = styled(BaseButton)`
  background-color: red;
  &:hover {
    background: transparent;
    color: red;
    border: red;
  }
`;

export const FilledButton = styled(BaseButton)`
  border: red;
  color: red;
  background: transparent;

  &:hover {
    background-color: red;
    color: white;
    border: transparent;
  }
`;
