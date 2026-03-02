import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
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
  color: #222;

  &:hover {
    font-weight: bold;
    color: #f05423;
  }

  &:hover > div {
    opacity: 1;
  }
`;

const BasicMenuLi = styled(NavLink)`
  cursor: pointer;
  color: #222;

  &:hover {
    font-weight: bold;
    color: #f05423;
  }

  &.active {
    color: #f05423;
    font-weight: bold;
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
  color: ${({ $active }) => ($active ? "#ff7a00" : "#444")};
  font-weight: ${({ $active }) => ($active ? "bold" : "500")};
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: #ff7a00;
    font-weight: bold;
  }
`;

export default function Gnb() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(null);

  const townMenu = [
    { id: 1, name: "김녕리" },
    { id: 2, name: "세화리" },
    { id: 3, name: "가시리" },
    { id: 4, name: "교래리" },
    { id: 5, name: "수산리" },
    { id: 6, name: "한남리" },
    { id: 7, name: "동백마을" },
    { id: 8, name: "의귀리" },
    { id: 9, name: "호근마을" },
    { id: 10, name: "하효마을" },
    { id: 11, name: "신창리" },
    { id: 12, name: "저지리" },
    { id: 13, name: "무릉2리" },
  ];

  return (
    <LogoBox onMouseLeave={() => setActiveMenu(null)}>
      <JejuLogo
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/logo.png"}
          alt="로고 이미지"
        />
      </JejuLogo>
      <Menu type="main">
        <MenuLi onMouseEnter={() => setActiveMenu("village")}>카름마을</MenuLi>
        <MenuLi onMouseEnter={() => setActiveMenu("travel")}>카름여행</MenuLi>
      </Menu>

      <Dropdown isOpen={activeMenu === "village"}>
        {townMenu.map((item) => (
          <DropdownItem
            key={item.id}
            $active={location.pathname === `/townintro/${item.id}`}
            onClick={() => navigate(`/townintro/${item.id}`)}
          >
            {item.name}
          </DropdownItem>
        ))}
      </Dropdown>

      <Dropdown isOpen={activeMenu === "travel"}>
        <DropdownItem
          $active={location.pathname === "/tourIntro/class"}
          onClick={() => {
            navigate("/tourIntro/class");
          }}
        >
          원데이 클래스
        </DropdownItem>
        <DropdownItem
          $active={location.pathname === "/tourIntro/event"}
          onClick={() => {
            navigate("/tourIntro/event");
          }}
        >
          기획전
        </DropdownItem>
        <DropdownItem
          $active={location.pathname === "/tourIntro/guide"}
          onClick={() => {
            navigate("/tourIntro/guide");
          }}
        >
          카름 마스터
        </DropdownItem>
      </Dropdown>

      <Menu type="basic">
        <BasicMenuLi to="/notice">공지사항</BasicMenuLi>
        <BasicMenuLi to="/reservation">예약내역</BasicMenuLi>
        <BasicMenuLi to="/login">로그인</BasicMenuLi>
      </Menu>
    </LogoBox>
  );
}
