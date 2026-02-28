import React from "react";
import styled from "styled-components";
import { GuideData } from "../../../data/tourMenu";

const Wrapper = styled.div`
  width: 1000px;
  margin: 90px auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Title = styled.div`
  text-align: center;

  .bigTitle {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .smallTitle {
    font-size: 20px;
    font-weight: 500;
    color: #3d3d3d;
  }
`;

const CardList = styled.div`
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;

  grid-template-columns: ${({ $type }) =>
    $type === "event" ?  "repeat(3, 1fr)" : "repeat(2, 1fr)"};
`;

const Box = styled.div`
  width: ${({ $type }) =>
    $type === "class" ? "calc((100% - 30px) / 2)" : "calc((100% - 60px) / 3)"};
  height: ${({ $type }) => ($type === "event" ? "430px" : "500px")};
  display: flex;
  flex-direction: column;
  cursor: pointer;

  h3 {
    font-size: 20px;
    word-break: keep-all;
    margin-top: 10px;
  }
  p {
    flex-grow: 1;
    font-size: 14px;
    overflow: hidden;
    margin: 10px 0;
    word-break: keep-all;
    color: #3d3d3d;
    overflow: hidden;
  }
`;

const ImgWrap = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  margin: 0 auto;
  border-radius: ${({ $type }) => ($type === "class" ? "50%" : "10px")};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const GuideImgWrap = styled(ImgWrap)`
  border-radius: 50%;
`;

const Price = styled.div`
  text-align: right;
  color: #f05423;
  border-top: 1px solid #f05423;
  padding: 10px 0;
  font-weight: 500;

  span {
    font-size: 12px;
  }
`;

const PageNumber = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin: 0 auto;
  color: #666;

  span {
    padding: 0 20px;
    cursor: pointer;
  }
`;

export default function TourItem({ name, intro, list, type, expo }) {
  return (
    <Wrapper>
      <Title>
        <div className="bigTitle">{name}</div>
        <div className="smallTItle">{intro}</div>
      </Title>

      {type === "guide" && (
        <CardList>
          {expo.map((item, index) => (
            <Box key={item.id}>
              <GuideImgWrap>
                <img src={item.img} alt={`설명 이미지 ${index + 1}`} />
              </GuideImgWrap>
              <h3>{item.name}</h3>
              <p>{item.intro}</p>
            </Box>
          ))}
        </CardList>
      )}

      {type === "guide" && (
        <h2 style={{ color: "#ff7a00" }}> 7 인의 카름마스터를 만나보세요! </h2>
      )}

      <CardList>
        {list.map((item) => (
          <Box key={item.id} $type={type}>
            <ImgWrap $type={type}>
              <img src={item.img} alt={item.name} />
            </ImgWrap>
            <h3>{item.name}</h3>
            <p>{item.intro}</p>
            {item.price?.toLocaleString() && (
              <Price>
                <span>(성인1인기준)</span> 가격: {item.price.toLocaleString()}원
              </Price>
            )}
          </Box>
        ))}
        {type === "event" && (
          <PageNumber>
            <span style={{ color: "#ff7a00" }}>1</span>
            <span>2</span>
            <span>3</span>
          </PageNumber>
        )}
      </CardList>
    </Wrapper>
  );
}
