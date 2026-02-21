import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 40px 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

const Title = styled.p`
  text-align: left;
  margin: 20px 0;
  font-size: 30px;
  font-weight: 600;
`;

const Item = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const Img = styled.div`
`;

const Thumbnail = styled.img`
  width: 200px;
  height: 150px;
  border-radius: 10px;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const Price = styled.div`
  font-size: 15px;
  color: #444;
`;

const Total = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  text-align: right;
  font-size: 18px;
  font-weight: 700;
`;

const ButtonRow = styled.div`
  diplay: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

const Cancel = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid #ff7a00;
  background: transparent;
  color: #ff7a00;
  font-weight: 600;
  cursor: pointer;
`

const Pay = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  background: #ff7a00;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
`;

function ReservationBox({ selectedRoom, selectedExperiences, setSelectedRoom, setSelectedExperiences }) {
  const totalPrice =
    selectedRoom.price +
    selectedExperiences.reduce((sum, exp) => sum + exp.price, 0);

  return (
    <Wrapper>
      <Title>예약내역</Title>

      <Item>
        <Thumbnail src={selectedRoom.image} alt="" />
        <Info>
          <div>{selectedRoom.name}</div>
          <div>1박 {selectedRoom.price.toLocaleString()}원</div>
        </Info>
      </Item>

      {selectedExperiences.map((exp) => (
        <Item key={exp.id}>
          <Thumbnail src={exp.image} alt={exp.title} />
          <Info>
            <div>{exp.title}</div>
            <div>{exp.price.toLocaleString()}원</div>
          </Info>
        </Item>
      ))}

      <Total>
        총액: {totalPrice.toLocaleString()}원
      </Total>

      <ButtonRow>
        <Cancel onClick={() => {
          setSelectedRoom(null);
          setSelectedExperiences([]);
        }}>취소하기</Cancel>
        <Pay>결제하기</Pay>
      </ButtonRow>
    </Wrapper>
  );
}

export default ReservationBox;
