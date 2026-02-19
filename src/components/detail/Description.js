import React from "react";
import styled from "styled-components";

const Title = styled.p`
  text-align: left;
  margin: 10px 0;
  font-size: 30px;
  font-weight: 600;
`;

const Box = styled.div`
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  white-space: pre-wrap;
  padding: 10px;
  text-align: left;
  font-size: 16px;
  line-height: 2;
  color: #555;
`;

export default function Description({ text }) {
  return (
    <>
      <Title>숙소소개</Title>
      <Box>{text}</Box>
    </>
  );
}
