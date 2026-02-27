import React from "react";
import styled from "styled-components";
import TownItem from "../components/common/page/TownItem";
import { IntroDate } from "../data/IntroData";
import { useParams } from "react-router-dom";

const Wrapper = styled.div`
  min-width: 1000px;
  margin: 20px auto;
`;

export default function TownIntro() {
  const {id} = useParams();

  const selectedTown = IntroDate.find((town) => town.id === Number(id));

  return (<Wrapper><TownItem {...selectedTown} /></Wrapper>);
}
