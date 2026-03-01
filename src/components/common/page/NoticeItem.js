import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 1000px;
  margin: 50px auto;
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

const NoticeList = styled.div`
  width: 100%;
  border-top: 1px solid #ddd;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 0;
  border-bottom: 1px solid #eee;
  cursor: pointer;
`;

const Number = styled.div`
  width: 60px;
  text-align: center;
  color: #999;
`;

const ListTitle = styled.div`
  flex: 1;
  text-align: left;
  padding: 0 20px;
`;
const Date = styled.div`
  width: 100px;
  text-align: right;
  color: #999;
`;

const PageNumber = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin: 40px auto;
  color: #666;

  span {
    padding: 0 20px;
    cursor: pointer;
  }
`;

export default function NoticeItem({ name, intro, list }) {
  return (
    <Wrapper>
      <Title>
        <div className="bigTitle">{name}</div>
        <div className="smallTItle">{intro}</div>
      </Title>

      <NoticeList>
        {list.map((item) => (
          <ListItem key={item.id}>
            <Number>{item.id}</Number>
            <ListTitle>{item.title}</ListTitle>
            <Date>{item.date}</Date>
          </ListItem>
        ))}

        <PageNumber>
          <span style={{ color: "#ff7a00" }}>1</span>
          <span>2</span>
        </PageNumber>
      </NoticeList>
    </Wrapper>
  );
}
