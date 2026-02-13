import React from "react";
import { FiCalendar } from "react-icons/fi";

import {
  LargeSection,
  SectionHeader,
  FestivalArea,
  LargeCardWrapper,
  LargeCardBox,
  LargeImage,
  ImageOverlay,
  MoreSchedule,
} from "./largeCard.styles";

export default function LargeCard({ data, title }) {
  return (
    <LargeSection>
      <SectionHeader>
        <FestivalArea>{title}</FestivalArea>

        <MoreSchedule>
          <FiCalendar size={20} />
          축제일정 더보기
        </MoreSchedule>
      </SectionHeader>

      <LargeCardWrapper>
        {data.map((item, index) => (
          <LargeCardBox key={index}>
            <LargeImage>
              <img src={item.image} alt={item.title} />

              <ImageOverlay>
                <h3>{item.title}</h3>
                <p>{item.address}</p>
              </ImageOverlay>
            </LargeImage>
          </LargeCardBox>
        ))}
      </LargeCardWrapper>
    </LargeSection>
  );
}
