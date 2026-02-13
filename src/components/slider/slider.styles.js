import styled, { keyframes } from "styled-components";

export const SlideWrapper = styled.div`
  width: 100%;
  margin-bottom: 60px;
  overflow: hidden;
`;
const slide = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%); 
  }
`;

export const SliderTrack = styled.div`
  display: flex;
  width: max-content; //내부 요소 길이만큼 늘어남
  animation: ${slide} 120s linear infinite; 

  &:hover {
    animation-play-state: paused;
  }
`;

export const Slide = styled.div`
  flex: 0 0 auto;
  width: 250px;
  margin-right: 10px;

  img {
    width: 100%;
    display: block;
    border-radius: 10px;
  }
`;
