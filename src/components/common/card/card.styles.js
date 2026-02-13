import React from "react";
import styled from "styled-components";

export const Card = styled.div`

`

export const ImageWrapper = styled.div`
  position: relative;
  width: ${({ variant }) => (variant === "pick" ? "100%" : "310px")};
  height: ${({ variant }) => (variant === "pick" ? "300px" : "200px")};
  aspect-ratio: ${({ variant }) => (variant === "pick" ? "1" : "auto")};
  overflow: hiddren;
  border-radius: 10px;
  overflow: hidden;
  margin: 5px 0;

  img {
    width: 100%;
    height:100%;
    oject-fit: cover;
    display: block;
  }
`;

export const PickOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 12px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
  color: #fff;
  font-size: 14px;
  line-height: 1.4;

  p {
    margin: 2px 0;
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
    color: #3D3D3D;
    font-size: 14px;
  }
`;
