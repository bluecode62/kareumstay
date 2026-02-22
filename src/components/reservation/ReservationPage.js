import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ReservationPage() {
  const [reservation, setReservation] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("reservation");
    if(saved) {
      setReservation(JSON.parse(saved));
    }
  }, []);

  const handlePayment = () => {
    navigate("/payment-complete");
  };

  const handleDelete = () => {
    localStorage.removeItem("reservation");
    setReservation(null);
  }

  if(!reservation) {
    return <Empty>예약 내역이 없습니다.</Empty>
  }

  return (
    <Wrapper>
      <Title>예약조회</Title>

      <Section>
        <h4>선택 객실:</h4>
        <Item>
          <img src={reservation.room.image} />
          <div>{reservation.room.name}</div>
        </Item>
      </Section>

      <Section>
        <h4>선택 원데이 클래스:</h4>
        {reservation.experiences.length === 0 ? (
          <div>선택 없음</div>
        ) : (
          reservation.experiences.map((exp) => (
            <Item key={exp.id}>
              <img src={exp.image} />
              <div>{exp.title}</div>
            </Item>
          ))
        )}
      </Section>

      <Total>총액: {reservation.total.toLocaleString()}원</Total>

      <ButtonRow>
        <DeleteBtn onclick={handleDelete}>지우기</DeleteBtn>
        <PayBtn onclick={handlePayment}>결제하기</PayBtn>
      </ButtonRow>
    </Wrapper>
  )
}
