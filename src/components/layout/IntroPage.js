import React from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
  min-width: 1000px;
  margin: 20px auto;
`;

const TownImg = styled.div`
  width: 100%;
  height: 400px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export default function IntroPage({data}) {
  return (
    <Wrapper>
      <TownImg>
        <img src={data.townImg} alt={data.id} />
      </TownImg>
      
    </Wrapper>
  )
}
