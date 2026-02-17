import React from "react";
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
  border: 1px solid ${({ $active }) => ($active ? "#f0523" : "#ddd")};
  border-radius: 20px;
  font-size: 12px;
  cursor: pointer;
  background-color: ${({ $active }) => ($active ? "#f05423" : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#333")};
  transition: all 0.2s ease;

  &:hover {
    border-color: #333;
  }
`;

export default function FilterBox({
  selectedTypes,
  toggleType,
  selectedFacilities,
  toggleFacility,
}) {
  const facilities = [
    "조식포함",
    "무료주차",
    "바베큐",
    "바다뷰",
    "수영장",
    "목욕시설",
    "카페",
    "반려동물 동반",
    "유아용품",
    "가족룸",
    "주방시설",
    "세탁시설",
    "전기차 충전",
  ];
  return (
    <Wrapper>
      <Title>필터</Title>

      <Section>
        <SectionTitle>숙소 유형</SectionTitle>
        <CheckboxGroup>
          <CheckboxItem>
            <input
              type="checkbox"
              checked={selectedTypes.includes("호텔 · 리조트")}
              onChange={() => toggleType("호텔 · 리조트")}
            />
            호텔 · 리조트
          </CheckboxItem>
          <CheckboxItem>
            <input
              type="checkbox"
              checked={selectedTypes.includes("모텔")}
              onChange={() => toggleType("모텔")}
            />
            모텔
          </CheckboxItem>
          <CheckboxItem>
            <input
              type="checkbox"
              checked={selectedTypes.includes("펜션")}
              onChange={() => toggleType("펜션")}
            />
            펜션
          </CheckboxItem>
          <CheckboxItem>
            <input
              type="checkbox"
              checked={selectedTypes.includes("홈 · 빌라")}
              onChange={() => toggleType("홈 · 빌라")}
            />
            홈 · 빌라
          </CheckboxItem>
          <CheckboxItem>
            <input
              type="checkbox"
              checked={selectedTypes.includes("캠핑")}
              onChange={() => toggleType("캠핑")}
            />
            캠핑
          </CheckboxItem>
          <CheckboxItem>
            <input
              type="checkbox"
              checked={selectedTypes.includes("게스트하우스 · 한옥 · 돌집")}
              onChange={() => toggleType("게스트하우스 · 한옥 · 돌집")}
            />
            게스트하우스 · 한옥 · 돌집
          </CheckboxItem>
        </CheckboxGroup>
      </Section>

      <Section>
        <SectionTitle>서비스 유형</SectionTitle>
        <TagGroup>
          {facilities.map((facility) => (
            <Tag
              key={facility}
              $active={selectedFacilities.includes(facility)}
              onClick={() => toggleFacility(facility)}
            >
              {facility}
            </Tag>
          ))}
        </TagGroup>
      </Section>
    </Wrapper>
  );
}
