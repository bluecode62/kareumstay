import React from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 10px 40px;
  background-color: #f05423;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #d9461f;
  }
`;

export default function Button({ children, ...props}) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
