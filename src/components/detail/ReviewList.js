import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { GiOrange } from "react-icons/gi";

const Wrapper = styled.div`
  margin: 10px 0;
`;

const Header = styled.div`
  margin: 20px 0;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 20px;
  font-weight: 600;
`;

const Count = styled.div`
  font-size: 14px;
  color: #777;
  font-weight: 400;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReviewItem = styled.div`
  display: flex;
  gap: 20px;
  padding: 40px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

const Left = styled.div``;

const Avatar = styled.div`
  width: 60px;
  height: 60px;
  line-height: 70px;
  text-align: center;
  border-radius: 50%;
  background-color: #f1f1f1;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 50px;
`;

const UserRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  min-width: 160px;
`;

const UserName = styled.div`
  font-weight: 600;
`;

const Stars = styled.div`
  display: flex;
  gap: 2px;
  margin-bottom: 10px;
`;

const Content = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.6;
`;

export default function ReviewList({ reviews }) {
  if (!reviews || reviews.length === 0) return null;

  return (
    <Wrapper>
      <Header>
        <Title>
          <FaStar color="#f4c430" />
          <span>리얼후기</span>
          <Count>{reviews.length}개 평가</Count>
        </Title>
      </Header>

      <List>
        {reviews.map((review) => (
          <ReviewItem key={review.id}>
            <Left>
              <Avatar>
                <GiOrange size={28} color="#ff7a00" />
              </Avatar>
            </Left>

            <Right>
              <UserRow>
                <UserName>{review.user}</UserName>
              </UserRow>

              <Content>
                <Stars>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <FaStar key={i} color="#f4c430" size={14} />
                  ))}
                </Stars>
                {review.content}
              </Content>
            </Right>
          </ReviewItem>
        ))}
      </List>
    </Wrapper>
  );
}
