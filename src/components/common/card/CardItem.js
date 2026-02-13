import React from "react";
import {
  Card,
  ImageWrapper,
  PickOverlay,
  CardInfo,
} from "./card.styles";

export default function CardItem({
  variant = "default",
  cardImage,
  cardTitle,
  location,
  description,
  pickTitle,
  pickTxt,
}) {
  return (
    <Card>
      {variant !== "pick" ? (
        <>
          <ImageWrapper variant={variant}>
            <img src={cardImage} alt={cardTitle} />
          </ImageWrapper>

          <CardInfo>
            <h4>{cardTitle}</h4>
            <p>{location}</p>
            <p>{description}</p>
          </CardInfo>
        </>
      ) : (
        <ImageWrapper variant="pick">
          <img src={cardImage} alt="PICK 카드" />
          <PickOverlay>
              <p>{pickTitle}</p>
              <p>{pickTxt}</p>
          </PickOverlay>
        </ImageWrapper>
      )}
    </Card>
  );
}
