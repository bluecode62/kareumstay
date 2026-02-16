import React from "react";
import styled from "styled-components";
import { FiHeart } from "react-icons/fi";

const Card = styled.div`
  display: flex;
  gap: 20px;
  padding: 30px 0;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  position: relative;
`;

const Image = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  background: #f5f5f5;
`;

const Info = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

const LeftBox = styled.div`
  min-width: 100px;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: flex-start;
`;

const RightBox = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Type = styled.p`
  font-size: 13px;
  color: #777;
`;

const Name = styled.h3`
  font-size: 18px;
  font-weight: 600;
`;

const Intro = styled.p`
  margin: 5px 0;
  font-weight: 500;
  font-size: 13px;
  word-break: break-word;
  overflow-wrap: break-word;
  color: #999;
`;

const Wrapping = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const Meta = styled.div`
  width: 50px;
  padding: 3px;
  border-radius: 10px;
  font-size: 14px;
  color: #fff;
  background-color: #f05423;
`;
const RatingBox = styled.span`
  font-size: 14px;
`;

const Price = styled.div`
  font-size: 17px;
  font-weight: 600;

  span {
    font-size: 13px;
    font-weight: 400;
    color: #777;
  }
`;

const HeartIcon = styled(FiHeart)`
  color: #999;
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 10px;
  font-size: 30px;

  &:hover {
    color: #f05423;
  }
`;

export default function AccommodationCard({ data }) {
  return (
    <Card>
      <Image src={data.image} alt={data.name} />

      <Info>
        <LeftBox>
          <Type>{data.type}</Type>
          <Name>{data.name}</Name>
          <Intro>{data.intro}</Intro>
          <Wrapping>
            <Meta>⭐ {data.rating}</Meta>
            <RatingBox>({data.reviewCount})</RatingBox>
          </Wrapping>
        </LeftBox>

        <RightBox>
          <HeartIcon />
          <Price>
            {data.price.toLocaleString()}원<span> 1박</span>
          </Price>
        </RightBox>
      </Info>
    </Card>
  );
}
