import React from "react";
import styled from "styled-components";
import Button from "../common/Button";

const Wrap = styled.div`
  width: 1000px;
  margin: 100px auto;
  display: flex;
  justify-content: center;
  gap: 10px;
`;
const BarBox = styled.div`
  width: ${({ type }) => (type === "big" ? "400px" : "150px")};
  border: 1px solid #3d3d3d;
  border-radius: 10px;
  font-weight: 500;
  font-size: 18px;
  flex: 0 0 auto;
  text-align: left;
  padding: 10px 20px;
  box-sizing: border-box;
  cursor: pointer;
`;
const BarTitle = styled.div`
  font-size: 14px;
  color: #3d3d3d;
  margin-bottom: 2px;
`;

export default function ReservationBar() {
  return (
    <Wrap>
      <BarBox>
        <BarTitle>마을선택</BarTitle>
        마을선택
      </BarBox>
      <BarBox type="big">
        <BarTitle>날짜</BarTitle>
        날짜
      </BarBox>
      <BarBox>
        <BarTitle>인원</BarTitle>
        1명
      </BarBox>
      <Button>검색</Button>
    </Wrap>
  );
}
