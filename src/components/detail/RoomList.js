import React from "react";
import styled from "styled-components";
import { StyledButton } from "../common/Button";

const Wrapper = styled.div`
  margin-top: 20px;
`;

const Title = styled.p`
  text-align: left;
  margin: 10px 0;
  font-size: 30px;
  font-weight: 600;
`;

const RoomCard = styled.div`
  display: flex;
  gap: 20px;
  padding: 30px;
  margin: 20px 0;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
`;

const RoomImage = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const RoomInfo = styled.div`
  flex: 1;
  text-align: left;

  p {
    font-size: 14px;
    color: #999;
    margin: 5px 0;
  }
`;

const BottomRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
`;

const Price = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export default function RoomList({ rooms }) {
  if (!rooms || rooms.length === 0) return null;

  return (
    <Wrapper>
      <Title>객실 선택</Title>

      {rooms.map((room) => (
        <RoomCard
          key={room.id}
          onClick={() => onSelectRoom(room)}
          active={selectedRoom?.id === room.id}
        >
          <RoomImage>
            <img src={room.image} alt={room.name} />
          </RoomImage>

          <RoomInfo>
            <h2>{room.name}</h2>
            <p>{room.info}</p>
          </RoomInfo>

          <BottomRow>
            <Price>{room.price.toLocaleString()}원</Price>
            <StyledButton>예약하기</StyledButton>
          </BottomRow>
        </RoomCard>
      ))}
    </Wrapper>
  );
}
