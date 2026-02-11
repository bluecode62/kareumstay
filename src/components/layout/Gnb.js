import React from "react";
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
`;
const Menu = styled.ul`
  display: flex;
  gap: 50px;
  color: ${({ type }) => (type === "basic" ? "#3D3D3D" : "black")};
  font-weight: ${({ type }) => (type === "main" ? "bold" : "normal")};
`;

export default function gnb() {
  return (
    <LogoBox>
      <JejuLogo>
        <img
          src={process.env.PUBLIC_URL + "../images/logo.png"}
          alt="로고 이미지"
        />
      </JejuLogo>
      <Menu type="main">
        <li>카름마을</li>
        <li>카름여행</li>
      </Menu>
      <Menu type="basic">
        <li>공지사항</li>
        <li>관심목록</li>
        <li>예약내역</li>
        <li>로그인</li>
      </Menu>
    </LogoBox>
  );
}
