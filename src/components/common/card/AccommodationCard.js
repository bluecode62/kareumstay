import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  gap: 20px;
  padding: 40px 0;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
`;

const Image = styled.img`
  width: 240px;
  height: 160px;
  object-fit: cover;
  border-radius: 10px;
  background: #f5f5f5;
`;

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Type = styled.p`
  font-size: 13px;
  color: #777;
`;

const Name = styled.h3`
  font-size: 18px;
  font-weight: 600;
`;

const Meta = styled.p`
  font-size: 14px;
  color: #555;
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: 600;

  span {
    font-size: 13px;
    font-weight: 400;
    color: #777;
  }
`;

export default function AccommodationCard({ data }) {
  return (
    <Card>
      <Image src={data.image} alt={data.name} />

      <Info>
        <Type>{data.type}</Type>
        <Name>{data.name}</Name>

        <Meta>
          ⭐ {data.rating} ({data.reviewCount})
        </Meta>

        <Price>
          {data.price.toLocaleString()}원<span> / 1박</span>
        </Price>
      </Info>
    </Card>
  );
}
