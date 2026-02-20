import React from "react";
import styled from "styled-components";
import { FiShare2, FiHeart } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineWifi, MdOutlineBathtub } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { GiBarbecue } from "react-icons/gi";
import { MdFreeBreakfast } from "react-icons/md";
import { FaWater } from "react-icons/fa";
import { FaBaby } from "react-icons/fa";

const Wrapper = styled.div`
  width: 100%;
`;

const Category = styled.p`
  font-size: 13px;
  color: #666;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TitleBlock = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;
const TitleNext = styled.span``;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin: 0;
`;

const Summary = styled.p`
  margin-top: 5px;
  color: #555;
`;

const IconGroup = styled.div`
  display: flex;
  gap: 20px;
  color:
  cursor: pointer;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  gap: 20px;
`;

const InfoArea = styled.div`
  display: flex;
  gap: 15px;
  flex: 1;
`;

const InfoBox = styled.div`
  flex: 1;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  padding: 20px;
  background: #fff;
`;

const BoxTitle = styled.h4`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
`;

const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;

  span {
    font-size: 14px;
    color: #666;
    width: 50px;
    padding: 2px 3px;
    border-radius: 10px;
    color: #fff;
    background-color: #f05423;
  }
`;
const RateCount = styled.p`
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
`;
const ReviewText = styled.p`
  margin-top: 10px;
  font-size: 14px;
  text-align: left;
  word-break: keep-all;
  color: #666;
`;

const ServiceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ServiceItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  font-weight: 500;
  color: #666;

  svg {
    color: #ccc;
    font-size: 20px;
  }
`;

const LocationRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #666;
  font-size: 14px;
  text-align: left;
  white-space: pre-line;
  cursor: pointer;
`;
const Price = styled.div`
  font-size: 28px;
  font-weight: 600;
  white-space: nowrap;
  text-align: right;
`;

function getServiceIcon(facilities) {
  switch (facilities) {
    case "와이파이":
      return <MdOutlineWifi />;
    case "무료주차":
      return <FaCar />;
    case "목욕시설":
      return <MdOutlineBathtub />;
    case "바베큐":
      return <GiBarbecue />;
    case "조식포함":
      return <MdFreeBreakfast />;
    case "바다뷰":
      return <FaWater />;
    case "유아용품":
      return <FaBaby />;
    default:
      return null;
  }
}
export default function BasicInfo({
  type,
  name,
  summary,
  rating,
  reviewCount,
  reviews,
  facilities,
  address,
  price,
}) {
  return (
    <Wrapper>
      <TitleRow>
        <TitleBlock>
          <LeftTitle>
            <Category>{type}</Category>
            <Title>{name}</Title>
          </LeftTitle>
          <TitleNext>
            <Summary>{summary}</Summary>
          </TitleNext>
        </TitleBlock>

        <IconGroup>
          <FiShare2 color="#FF7A00" size={30} />
          <FiHeart color="#FF7A00" size={30} />
        </IconGroup>
      </TitleRow>

      <Price>{price?.toLocaleString()}원</Price>

      <BottomSection>
        <InfoArea>
          <InfoBox>
            <RatingRow>
              <span>⭐ {rating}</span>
              <RateCount>{reviewCount}명 평가</RateCount>
            </RatingRow>
            <ReviewText>{reviews}</ReviewText>
          </InfoBox>

          <InfoBox>
            <BoxTitle>서비스 및 부대시설</BoxTitle>
            <ServiceList>
              {facilities?.map((item, id) => (
                <ServiceItem key={id}>
                  {getServiceIcon(item)}
                  <span>{item}</span>
                </ServiceItem>
              ))}
            </ServiceList>
          </InfoBox>

          <InfoBox>
            <BoxTitle>위치정보</BoxTitle>
            <LocationRow>
              <IoLocationOutline size={40} />
              <span>{address}</span>
            </LocationRow>
          </InfoBox>
        </InfoArea>
      </BottomSection>
    </Wrapper>
  );
}
