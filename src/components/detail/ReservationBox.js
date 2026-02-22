import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 40px 0;
`;

const Title = styled.p`
  text-align: left;
  margin: 20px 0;
  font-size: 30px;
  font-weight: 600;
`;

const ItemList = styled.div`
  display: flex;
  gap: 20px;
  border-top: 1px solid #eee;
  padding-top: 20px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Thumbnail = styled.img`
  width: 250px;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  text-align: left;

  p {
    font-size: 20px;
    font-weight: 600;
  }
  div {
    font-size: 15px;
    color: #444;
  }
  span {
    margin-top: 20px;
    padding-top: 20px;
    text-align: right;
    font-size: 18px;
    font-weight: 700;
  }
`;

const Total = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  text-align: right;
  font-size: 20px;
  font-weight: 700;

  span {
    font-size: 14px;
    color: #888;
    font-weight: 500;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

const Cancel = styled.button`
  padding: 10px 40px;
  border-radius: 10px;
  border: 1px solid #ff7a00;
  background: transparent;
  color: #ff7a00;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
`;
const SaveBtn = styled.button`
  background: #4caf50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
`;

const Pay = styled.button`
  padding: 10px 40px;
  border-radius: 10px;
  border: none;
  background: #ff7a00;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  background: white;
  padding: 24px;
  border-radius: 16px;
  text-align: center;
`;

const ConfirmBtn = styled.button`
  background: #4caf50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
`;

const CancelBtn = styled.button`
  background: #ddd;
  padding: 10px 20px;
  color: #333;
  border: none;
  border-radius: 10px;
`;

function ReservationBox({
  selectedRoom,
  selectedExperiences,
  setSelectedRoom,
  setSelectedExperiences,
}) {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);

  const totalPrice =
    selectedRoom.price +
    selectedExperiences.reduce((sum, exp) => sum + exp.price, 0);

  const handleSave = () => {
    const reservationData = {
      room: selectedRoom,
      experiences: selectedExperiences,
      total:
        selectedRoom.price +
        selectedExperiences.reduce((sum, exp) => sum + exp.price, 0),
    };

    localStorage.setItem("reservation", JSON.stringify(reservationData));

    alert("예약조회에 저장되었습니다.");
  };

  return (
    <Wrapper>
      <Title>예약내역</Title>

      <ItemList>
        <Item>
          <Thumbnail src={selectedRoom.image} alt="" />
          <Info>
            <p>{selectedRoom.name}</p>
            <div>
              1박 <span>{selectedRoom.price.toLocaleString()}원</span>{" "}
            </div>
          </Info>
        </Item>

        {selectedExperiences.map((exp) => (
          <Item key={exp.id}>
            <Thumbnail src={exp.image} alt={exp.title} />
            <Info>
              <p>{exp.title}</p>
              <div>
                1인 <span>{exp.price.toLocaleString()}원</span>
              </div>
            </Info>
          </Item>
        ))}
      </ItemList>

      <Total>
        <span>총액:</span> {totalPrice.toLocaleString()}원
      </Total>

      <ButtonRow>
        <Cancel
          onClick={() => {
            setSelectedRoom(null);
            setSelectedExperiences([]);
          }}
        >
          취소하기
        </Cancel>
        <SaveBtn onClick={handleSave}>저장하기</SaveBtn>
        <Pay onClick={() => setShowConfirm(true)}>결제하기</Pay>
        {showConfirm && (
          <ModalOverlay>
            <Modal>
              <p>결제하시겠습니까?</p>
              <ButtonRow>
                <ConfirmBtn
                  onClick={() => {
                    setShowConfirm(false);
                    navigate("/payment-complete");
                  }}
                >
                  예
                </ConfirmBtn>
                <CancelBtn onClick={() => setShowConfirm(false)}>
                  아니오
                </CancelBtn>
              </ButtonRow>
            </Modal>
          </ModalOverlay>
        )}
      </ButtonRow>
    </Wrapper>
  );
}

export default ReservationBox;
