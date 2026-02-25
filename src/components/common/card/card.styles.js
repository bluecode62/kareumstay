import styled from "styled-components";

export const Card = styled.div`
  cursor: pointer;
`;
export const ImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: ${({ variant }) => (variant === "pick" ? "350px" : "200px")};
  aspect-ratio: 1;
  overflow: hiddren;
  border-radius: 10px;
  overflow: hidden;
  margin: 5px 0;

  img {
    width: 100%;
    height: 100%;
    oject-fit: cover;
    display: block;
  }
`;

export const PickOverlay = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 12px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
  color: #fff;
  font-size: 14px;
  line-height: 1.4;
  pointer-events: none;

  p {
    margin: 5px 0;
    font-size: 20px;
    font-weight: 500;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h3 {
    font-size: 24px;
    font-weight: 600;
  }

  h4 {
    font-size: 18px;
    font-weight: 500;
    color: black;
  }
  p {
    color: #3d3d3d;
    font-size: 14px;
    font-weight: 500;
  }
`;
