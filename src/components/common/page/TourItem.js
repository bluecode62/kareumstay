import React from "react";
import styled from "styled-components";

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
  gap: 30px;
`;

const Box = styled.div`
  width: 400px;
  height: 520px;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 24px;
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
  border-radius: ${({ $type }) => ($type === "event" ? "10px" : "50%")};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const Price = styled.p`
  text-align: right;
  color: #b7b7b7;
  border-top: 1px solid #4b4f53;
  padding: 10px 0;

  span {
    font-size: 12px;
  }
`;

export default function TourItem({ name, intro, classList, type }) {
  return (
    <Wrapper>
      <Title>
        <div className="bigTitle">{name}</div>
        <div className="smallTItle">{intro}</div>
      </Title>
      <CardList>
        {classList.map((item) => (
          <Box key={item.id}>
            <ImgWrap $type={type}>
              <img src={item.img} alt={item.className} />
            </ImgWrap>
            <h3>{item.className}</h3>
            <p>{item.intro}</p>
            <Price>
              <span>(성인1인기준)</span> 가격: {item.price.toLocaleString()}원
            </Price>
          </Box>
        ))}
      </CardList>
    </Wrapper>
  );
}
