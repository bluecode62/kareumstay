import React from "react";
import AccommodationCard from "../common/card/AccommodationCard";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
padding-left: ${({ noPadding }) => (noPadding ? "0" : "40px 0")};
`;
const EmptyWrapper = styled.div`
  padding: 80px 0;
  text-align: left;
  color: #666;
`;
const EmptyTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;
const EmptyText = styled.p`
  font-size: 14px;
  color: #999;
`;

export default function AccommodationList({ list, onCardClick }) {
  if(list.length === 0){
    return(
      <EmptyWrapper>
        <EmptyTitle>조건에 맞는 숙소가 없어요.😢</EmptyTitle>
        <EmptyText>
        선택한 필터를 다시 확인해보세요.
        </EmptyText>
      </EmptyWrapper>
    )
  }

  return (
    <Wrapper>
      {list.map((item) => (
        <AccommodationCard key={item.id} data={item} onClick={()=> onCardClick(item.id)}/>
      ))}
    </Wrapper>
  );
}
