import React from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-weight: 500;
  border: 1px solid #000;
  border-radius: 10px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const TotalText = styled.p`
  font-size: 20px;
  color: #333;
`;

const Count = styled.span`
  font-weight: 700;
  color: #F05423;
  font-size: 22px;
`
const Right = styled.div``;

const SortList = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    font-size: 15px;
    color: #666;
    cursor: pointer;
    position: relative;
  }

  li:not(:last-child)::after{
    content: "|";
    margin-left: 15px;
    color: #ddd;
  }

  li.active {
    color: #000;
    font-weight: 600;
  }

  li:hover {
    color: #000;
  }
`;

export default function ResultBar() {
  return (
    <Wrapper>
      <Left>
        <TotalText>
          총 <Count>6</Count>개의 숙소
        </TotalText>
      </Left>

      <Right>
        <SortList>
          <li>추천순</li>
          <li>낮은 가격순</li>
          <li>높은 가격순</li>
          <li>리뷰순</li>
        </SortList>
      </Right>
    </Wrapper>
  )
}
