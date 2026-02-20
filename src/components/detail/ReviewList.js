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
const JoinPerid = styled.div``;

const Right = styled.div`
  flex: 1;
  display: flex;
  gap: 50px;
`;

const UserRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  min-width: 150px;
`;

const UserName = styled.div`
  font-weight: 600;
`;
const JoinPeriod = styled.div`
  font-size: 13px;
  color: #999;
`;
const RateDate = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;
const CreatedAt = styled.div``;
const Stars = styled.div`
  display: flex;
  margin-top: 2px;
  gap: 2px;
`;
const Room = styled.div`
  text-align: left;
`;
const Content = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #555;
  line-height: 1.6;
`;

const ReviewContent = styled.div`
  margin-top: 20px
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
                <JoinPeriod>{review.joinPeriod}</JoinPeriod>
              </UserRow>

              <Content>
                <RateDate>
                  <Stars>
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <FaStar key={i} color="#f4c430" size={14} />
                    ))}
                  </Stars>
                  <CreatedAt>{review.createdAt}</CreatedAt>
                </RateDate>
                <Room>{review.room}</Room>
                <ReviewContent>{review.content}</ReviewContent>
              </Content>
            </Right>
          </ReviewItem>
        ))}
      </List>
    </Wrapper>
  );
}
