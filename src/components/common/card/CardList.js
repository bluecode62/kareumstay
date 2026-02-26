import React from "react";
import styled from "styled-components";
import CardItem from "./CardItem";

const CardWrapper = styled.div`
  width: 1000px; 
  height: ${({ variant }) => (variant === "pick" ? "400px" : "320px")};
  margin: 30px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  position: relative;
`;

const ListWraper = styled.div`
  display: flex; 
  flex-wrap: wrap; 
  align-items: center;
  gap: 10px; 
  margin-top: 10px;
`;

const NextBtn = styled.button`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: 1px solid #3d3d3d;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  font-size: 20px;
  cursur: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;

export default function CardList({ data, variant, title }) {
  return (
    <CardWrapper variant={variant}>
      {title && <h3>{title}</h3>}
      <ListWraper>
        {data.map((item, id) => (
          <CardItem key={id} {...item} variant={variant} />
        ))}
      </ListWraper>
      <NextBtn>→</NextBtn>
    </CardWrapper>
  );
}
