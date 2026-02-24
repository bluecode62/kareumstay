import React from 'react'
import styled from "styled-components";
import { FiShare2, FiHeart } from "react-icons/fi";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  width: 500px;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
  font-weight: 500;
  color: #4b4f53;
  position: relative;
  
  & h3 {
  margin-bottom: 20px;
  }

  & ol {
  text-align: left;
  }

  & li {
  margin: 10px 0;

  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  border: none;
  font-size: 25px;
  color: #333;
  background: transparent;
`;

export default function HelpModal({onClose}) {
  return (
    <Overlay onClick={onClose}>
      <ModalBox>
        <CloseBtn onClick={onClose}>X</CloseBtn>
        <h3>숙박사이트 이용 방법 <span style={{ fontSize: "20px" }}>🍊</span></h3>
          <ol>
          <li>1. 헤더 하단 숙박 예약바에서 마을(하효마을), 날짜, 인원수 설정 후 검색</li>
          <li  style={{ color: "#ff7a00" }}>*다른 마을로 검색해도 숙소리스트 나오지만 Detail 페이지는 !하효마을만!*</li>
          <li>2. 왼쪽/오른쪽 필터링 후 원하는 숙소 선택</li>
          <li>3. 객실 선택, 클래스 선택(옵션) 후 '결제' 또는 '저장하기'</li>
          <li>4. '결제하기' 클릭 시 결제완료 페이지로 이동</li>
          <li  style={{ color: "#ff7a00" }}>★'저장하기'★ 클릭 시
            <ul>
              <li>헤더 메뉴 '예약조회' 클릭</li>
              <li>마을, 숙소명, 날짜, 인원수, 객실, 클래스 조회 가능</li>
              <li>'취소하기' 클릭 → 삭제, '결제하기' 클릭 → 결제완료 페이지 이동</li>
            </ul>
          </li>
        </ol>
      </ModalBox>
    </Overlay>
  )
}
