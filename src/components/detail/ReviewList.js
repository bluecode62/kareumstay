import React, { useState } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { GiOrange } from "react-icons/gi";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";


const Wrapper = styled.div`
  margin: 10px 0;
`;

const PageWrap = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Arrow = styled.div`
  curosr: default;
  color: #333;
`;

const PageList = styled.div`
  display: flex;
  align-items: center;
`;

const Page = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${(props) => (props.active ? "600" : "400")};
  cursor: default;
  color: ${(props) => (props.active ? "#fff" : "#333")};
  background-color: ${(props) => 
    props.active ? "#ff7a00" : "transparent"};
`;

const Header = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const FilterBox = styled.div`
  position:relative;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  font-size: 14px;
  color: #444;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  width: 100px;
  background: white;
  border: 1px solid #eee;
  border-radius: 10px;
  box-shadow: 0 4px 12 rgba(0,0,0,0.08);
  overflow: hidden;
  z-index: 10;
`;

const Option = styled.div`
  padding: 10px 15px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }
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
  // border-bottom: 1px solid #eee;
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
  text-align: left;
`;

const ReviewContent = styled.div`
  margin-top: 20px
`;

export default function ReviewList({ reviews }) {

  const [sortType, setSortType] = useState("latest");
  const [isOpen, setIsOpen] = useState(false);

  const handleSort = (type) => {
    setSortType(type);
    setIsOpen(false);
  };

  const sortedReviews = [...reviews].sort((a,b) => {
    if(sortType === "high") return b.rating - a.rating;
    if(sortType === "low") return a.rating - b.rating;
    return a.id - b.id;
  });

    if (!reviews || reviews.length === 0) return null;
  return (
    <Wrapper>
      <Header>
        <Title>
          <FaStar color="#f4c430" />
          <span>리얼후기</span>
          <Count>{reviews.length}개 평가</Count>
        </Title>

        <FilterBox onClick={() => setIsOpen(!isOpen)}>
          <span>
            {sortType === "latest" && "최신순"}
            {sortType === "high" && "별점 높은순"}
            {sortType === "low" && "별점 낮은순"}
          </span>
          <IoIosArrowDown />
          {isOpen && (
            <Dropdown>
              <Option onClick={() => handleSort("latest")}>최신순</Option>
              <Option onClick={() => handleSort("high")}>별점 높은순</Option>
              <Option onClick={() => handleSort("low")}>별점 낮은순</Option>
            </Dropdown>
          )}
        </FilterBox>
      </Header>

      <List>
        {sortedReviews.map((review) => (
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
      <PageWrap>
        <Arrow>
          <IoChevronBack size={30} />
        </Arrow>

        <PageList>
          <Page active>1</Page>
          <Page>2</Page>
          <Page>3</Page>
          <Page>4</Page>
        </PageList>

        <Arrow>
          <IoChevronForward size={30} />
        </Arrow>
      </PageWrap>
    </Wrapper>
  );
}
