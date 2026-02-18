import React from 'react'
import styled from "styled-components";
import { FiShare2, FiHeart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineWifi, MdOutlineBathtub } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { GiBarbecue } from "react-icons/gi";
import { MdFreeBreakfast } from "react-icons/md";
import { FaWater } from "react-icons/fa";

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0;
`;

const Category = styled.p`
  font-size: 13px;
  color: #666;
  margin: 10px 0;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

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
  gap: 15px;
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
  gap: 5px;
  font-weight: 600;

  span {
    font-size: 14px;
    color: #666;
  }
`;

const ReviewText = styled.p`
  margin-top: 10px;
  font-size: 14px;
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

  svg {
    color: #888;
  }
`;

const LocationRow = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
`;

const Price = styled.div`
  font-size: 28px;
  font-weight: 600;
  white-space: nowrap;
  align-self: flex-start;
`;

function getServiceIcon(facilities){
  switch (facilities) {
    case "와이파이":
      return <MdOutlineWifi />;
    case "무료 주차 공간":
      return <FaCar />;
    case "목욕시설":
      return <MdOutlineBathtub />;
    case "바베큐":
      return <GiBarbecue />;
    case "조식포함":
      return <MdFreeBreakfast />;
    case "바다뷰":
      return <FaWater />;

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
      <Category>{type}</Category>

      <TitleRow>
        <TitleBlock>
          <Title>{name}</Title>
          <Summary>{summary}</Summary>
        </TitleBlock>

        <IconGroup>
          <FiShare2 size={20}/>
          <FiHeart size={20}/>
        </IconGroup>
      </TitleRow>

      <BottomSection>
        <InfoArea>
        <InfoBox>
          <RatingRow>
            <FaStar color="#FF7A00" />
            <span>{rating}</span>
            <span>{reviewCount}명 평가</span>
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
            <IoLocationOutline />
            <span>{address}</span>
          </LocationRow>
        </InfoBox>
        </InfoArea>

        <Price>{price?.toLocaleString()}원</Price>
      </BottomSection>
    </Wrapper>
  );
}
