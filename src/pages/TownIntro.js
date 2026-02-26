import React, { useState } from "react";
import styled from "styled-components";
import TownItem from "../components/common/page/TownItem";
import { IntroDate } from "../data/IntroData";

const Wrapper = styled.div`
  min-width: 1000px;
  margin: 20px auto;
`;

export default function TownIntro() {
  const [selectedId] = useState(1);

  const selectedTown = IntroDate.find((town) => town.id === selectedId);

  return (<Wrapper>{selectedTown && <TownItem {...selectedTown} />}</Wrapper>);
}
