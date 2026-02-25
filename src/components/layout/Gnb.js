import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LogoBox = styled.div`
  height: 50px;
  line-height: 50px;
  display: flex;
  position: relative;
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
    color: #f05423;
  }

  &:hover > div {
    opacity: 1;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  height: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  text-align: center;
  padding: 20px 0;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-10px)"};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  transition: all 0.3s ease;
  z-index: 100;
`;

const DropdownItem = styled.div`
  padding: 10px 20px;
  font-size: 14px;
  color: #444;
  font-weight: 500;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: #ff7a00;
    font-weight: bold;
  }
`;

export default function Gnb() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <LogoBox onMouseLeave={() => setActiveMenu(null)}>
      <JejuLogo  onClick={() => {
            navigate("/");
          }}>
        <img
          src={process.env.PUBLIC_URL + "../images/logo.png"}
          alt="로고 이미지"
        />
      </JejuLogo>
      <Menu type="main">
        <MenuLi onMouseEnter={() => setActiveMenu("village")}>카름마을</MenuLi>
        <MenuLi onMouseEnter={() => setActiveMenu("travel")}>카름여행</MenuLi>
      </Menu>

      <Dropdown isOpen={activeMenu === "village"}>
        <DropdownItem>김녕리</DropdownItem>
        <DropdownItem>세화리</DropdownItem>
        <DropdownItem>가시리</DropdownItem>
        <DropdownItem>겨래리</DropdownItem>
        <DropdownItem>수산리</DropdownItem>
        <DropdownItem>한남리</DropdownItem>
        <DropdownItem>동백마을</DropdownItem>
        <DropdownItem>의귀리</DropdownItem>
        <DropdownItem>호근마을</DropdownItem>
        <DropdownItem>하효마을</DropdownItem>
        <DropdownItem>신창리</DropdownItem>
        <DropdownItem>저지리</DropdownItem>
        <DropdownItem>무릉2리</DropdownItem>
      </Dropdown>

      <Dropdown isOpen={activeMenu === "travel"}>
        <DropdownItem>원데이 클래스</DropdownItem>
        <DropdownItem>기획전</DropdownItem>
        <DropdownItem>카름 마스터</DropdownItem>
      </Dropdown>

      <Menu type="basic">
        <MenuLi>공지사항</MenuLi>
        <MenuLi
          onClick={() => {
            navigate("/reservation");
          }}
        >
          예약내역
        </MenuLi>
        <MenuLi>로그인</MenuLi>
      </Menu>
    </LogoBox>
  );
}
