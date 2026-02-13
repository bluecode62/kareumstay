import { SlideWrapper, SliderTrack, Slide } from "./slider.styles";
import styled from "styled-components";

const TownTitle = styled.p`
  text-align: center;
  margin: 40px 0;
  font-weight: 600;
  font-size: 25px;
`;

export default function VillageSlider({ data, title }) {
  return (
    <SlideWrapper>
      {title && <TownTitle>{title}</TownTitle>}

      <SliderTrack>
        {data.map((item, i) => (
          <Slide key={i}>
            <img src={item.image} alt="" />
          </Slide>
        ))}
        {data.map((item, i) => (
          <Slide key={`copy-${i}`}>
            <img src={item.image} alt="" />
          </Slide>
        ))}
      </SliderTrack>
    </SlideWrapper>
  );
}
