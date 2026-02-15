import React from 'react'
import { accommodationData } from "../../data/accommodationData";
import AccommodationCard from '../common/card/AccommodationCard';
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;         /* 필터박스 옆에서 남는 영역 차지 */
  padding-left: 40px;
`;

export default function AccommodationList({town}) {
  const filtered = accommodationData.filter(
    (item) => item.town === "하효마을"
  );

  return (
    <Wrapper>
      {filtered.map((item) => (
        <AccommodationCard key={item.id} data={item} />
      ))}
    </Wrapper>
  );
}
