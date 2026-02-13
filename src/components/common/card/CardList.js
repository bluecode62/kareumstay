import React from "react";
import styled from "styled-components";
import CardItem from "./CardItem";

const CardWrapper = styled.div`
  width: 1000px;
  height: 320px;
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
  display: flex; // 가로로 배치
  flex-wrap: wrap; // 카드 수 늘어나면 다음 줄로
  align-items: center;
  gap: 10px; // 카드 간격
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
    <CardWrapper>
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
