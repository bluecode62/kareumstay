import React from 'react'
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styled(FaCheckCircle)`
  font-size: 80px;
  color: #4caf50;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
`;

const SubText = styled.p`
  color: #777;
`;

const HomeButton = styled.button`
  margin-top: 30px;
  padding: 10px 30px;
  background: #ff7a00;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  cursor:pointer;
  transition: .2s;

  &:hover {
    background: #ff8f2a;
    transform: translateY(-2px);
  }
`;

export default function PaymentComplete() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Icon />
      <Title>결제가 완료되었습니다.</Title>
      <SubText>예약이 정상적으로 접수되었습니다.</SubText>
      <HomeButton onClick={() => navigate("/")}>
        홈으로 가기
      </HomeButton>
    </Wrapper>
  )
}
