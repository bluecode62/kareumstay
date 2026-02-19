import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 20px;
`;

const Title = styled.p`
  text-align: left;
  margin: 20px 0;
  font-size: 30px;
  font-weight: 600;
`;

const ScrollRow = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.div`
  min-width: 260px;
  flex-shrink: 0;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  border-radius: 16px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AddButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 80px;
  height: 30px;
  border-radius: 0 0 0 10px;
  border: none;
  background: #ff5a3c;
  color: #fff;
  font-size: 30px;
  cursor: pointer;
`;

const Content = styled.div`
  margin-top: 10px;
  text-align: left;
`;

const PriceRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-end;
  margin-top: 5px;
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const SubText = styled.span`
  font-size: 13px;
  color: #888;
`;

export default function ExperienceList({ experiences }) {
  if (!experiences || experiences.length === 0) return null;

  return (
    <Wrapper>
      <Title>예약가능 원데이클래스</Title>

      <ScrollRow>
        {experiences.map((exp) => (
          <Card key={exp.id}>
            <ImageWrapper>
              <img src={exp.image} alt={exp.title} />
              <AddButton>+</AddButton>
            </ImageWrapper>

            <Content>
              <h3>{exp.title}</h3>
              <PriceRow>
                <Price>{exp.price.toLocaleString()}원</Price>
                <SubText>성인 1인 기준</SubText>
              </PriceRow>
            </Content>
          </Card>
        ))}
      </ScrollRow>
    </Wrapper>
  );
}
