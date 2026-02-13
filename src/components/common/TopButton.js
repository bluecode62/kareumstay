import React from "react";
import styled from "styled-components";

export const TopBtn = styled.button`
  position: fixed;
  bottom: 300px;
  right: 40px;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: #F05423;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    padding-bottom: 10px;
  }
`;

export default function TopButton() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return <TopBtn onClick={handleClick}>↑</TopBtn>;
}
