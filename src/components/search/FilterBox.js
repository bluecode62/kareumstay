import React from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
  width: 280px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: left;
  flex-shrink: 0;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 25px;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 15px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-bottom: 20px;
  border-bottom: 1px solid #000;
`;

const CheckboxItem = styled.label`
  font-size: 14px;
  color: #444;
  cursor: pointer;

  input {
    margin-right: 5px;
    cursor: pointer;
  }
`;

const TagGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const Tag = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    border-color: #333;
  }
`;

export default function FilterBox() {
  return (
    <Wrapper>
      <Title>필터</Title>

      <Section>
        <SectionTitle>숙소 유형</SectionTitle>
        <CheckboxGroup>
          <CheckboxItem>
            <input type="checkbox" />
            호텔 · 리조트 
          </CheckboxItem>
          <CheckboxItem>
            <input type="checkbox" />
            모텔 
          </CheckboxItem>
          <CheckboxItem>
            <input type="checkbox" />
            펜션 
          </CheckboxItem>
          <CheckboxItem>
            <input type="checkbox" />
            홈 · 빌라
          </CheckboxItem>
          <CheckboxItem>
            <input type="checkbox" />
            캠핑
          </CheckboxItem>
          <CheckboxItem>
            <input type="checkbox" />
            게스트하우스 · 한옥 · 돌집
          </CheckboxItem>
        </CheckboxGroup>
      </Section>

      <Section>
        <SectionTitle>서비스 유형</SectionTitle>
        <TagGroup>
          <Tag>조식포함</Tag>
          <Tag>무료주차</Tag>
          <Tag>바베큐</Tag>
          <Tag>바다뷰</Tag>
          <Tag>수영장</Tag>
          <Tag>목욕시설</Tag>
          <Tag>카페</Tag>
          <Tag>반려동물 동반</Tag>
          <Tag>유아용품</Tag>
          <Tag>가족룸</Tag>
          <Tag>주방시설</Tag>
          <Tag>세탁시설</Tag>
          <Tag>전기차 충전</Tag>
        </TagGroup>
      </Section>

    </Wrapper>
  );
}
