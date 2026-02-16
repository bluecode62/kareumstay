import React from "react";
import { accommodationData } from "../../data/accommodationData";
import AccommodationCard from "../common/card/AccommodationCard";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  padding-left: 40px;
`;

export default function AccommodationList({ town }) {
  const filtered = town
    ? accommodationData.filter((item) => item.town === town)
    : accommodationData;

  return (
    <Wrapper>
      {filtered.map((item) => (
        <AccommodationCard key={item.id} data={item} />
      ))}
    </Wrapper>
  );
}
