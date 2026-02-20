import React from 'react'
import styled from "styled-components";
import { MdOutlineCancel } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";

const Wrapper = styled.div`
  margin-top: 20px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin: 20px 0;
`;

const CardRow = styled.div`
  display: flex;
  gap: 20px;
`;

const Card = styled.div`
  flex: 1;
  padding: 30px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  text-align: center;
`;

const IconWrapper = styled.div`
  margin-bottom: 10px;
  color: #222;
`;

const Content = styled.div`
  p{
    font-size: 14px;
    color: #666;
    white-space: pre-line;
    line-height: 1.6;
  }
`;

const More = styled.div`
  margin-top: 10px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
`;

const iconMap = {
  cancel: <MdOutlineCancel size={50} />,
  time: <MdAccessTime size={50} />,
  safety: <MdOutlineSecurity size={50} />,
};

export default function NoticeList({notices}) {
  if(!notices || notices.length === 0) return null;

  return (
    <Wrapper>
      <Title>알아두어야 할 사항</Title>

      <CardRow>
        {notices.map((notice) => (
          <Card key={notice.id}>
            <IconWrapper>{iconMap[notice.icon]}</IconWrapper>

            <Content>
              <p>{notice.content}</p>
              <More>자세히 알아보기</More>
            </Content>
          </Card>
        ))}
      </CardRow>
    </Wrapper>
  );
}
