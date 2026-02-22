import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LogoBox = styled.div`
  height: 50px;
  line-height: 50px;
  display: flex;
  background-color: #fafafa;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-bottom: 1px solid #c0c0c0;
`;
const JejuLogo = styled.div`
  width: 200px;
  height: 30px;
  cursor: pointer;
`;
const Menu = styled.ul`
  display: flex;
  gap: 50px;
  color: ${({ type }) => (type === "basic" ? "#3D3D3D" : "black")};
  font-weight: ${({ type }) => (type === "main" ? "bold" : "normal")};
`;
const MenuLi = styled.li`
  cursor: pointer;
  &:hover {
    font-weight: bold;
    color: #F05423;
  }
`;

export default function Gnb() {
  const navigate = useNavigate();
  return (
    <LogoBox>
      <JejuLogo>
        <img
          src={process.env.PUBLIC_URL + "../images/logo.png"}
          alt="로고 이미지"
        />
      </JejuLogo>
      <Menu type="main">
        <MenuLi>카름마을</MenuLi>
        <MenuLi>카름여행</MenuLi>
      </Menu>
      <Menu type="basic">
        <MenuLi>공지사항</MenuLi>
        <MenuLi>관심목록</MenuLi>
        <MenuLi onClick={() => {
          navigate("/reservation")
        }}>예약내역</MenuLi>
        <MenuLi>로그인</MenuLi>
      </Menu>
    </LogoBox>
  );
}
