import React from "react";
import styled from "styled-components";

const GalleryWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 400px;
  margin: 20px 0;
`;

const MainImage = styled.div`
  flex: 1;
  overflow: hidden;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SubImageGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 5px;
`;

const SubImage = styled.div`
  overflow: hidden;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function ImageGallery({ thumbnail, images }) {
  return (
    <GalleryWrapper>
      <MainImage>
        <img src={thumbnail} alt="대표 이미지" />
      </MainImage>

      <SubImageGrid>
        {images?.map((img, index) => (
          <SubImage key={index}>
            <img src={img} alt={`숙소 이미지 ${index + 1}`} />
          </SubImage>
        ))}
      </SubImageGrid>
    </GalleryWrapper>
  );
}
