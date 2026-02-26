import React from "react";
import styled from "styled-components";
// import { IntroDate } from "../data/IntroData";
// import IntroPage from "../components/layout/IntroPage";

const Wrapper = styled.div`
  min-width: 1000px;
  margin: 20px auto;
`;


export default function TownIntro({ data }) {
  return (
    <Wrapper>
      {/* {data.map((item) => (
        <IntroPage
          key={item.id}
          data={item}
        />
      ))} */}
    </Wrapper>
  );
}
