import React from "react";
import styled from "styled-components";

const Footer = styled.div`
  margin-top: auto;
  background-color: #4b4f53;
  color: white;
`;
const Inside = styled.div`
  width: 1070px;
  height: 150px;
  padding: 40px;
  margin: 0 auto;
  display: flex;
  gap: 20px;
`;
const LeftBox = styled.div`
  width: 120px;
  height: 150px;
`;
const RightBox = styled.div`
  width: 900px;
  height: 100px;
`;
const ImgBox = styled.div`
  width: 120px;
`;
const ImgList = styled.div`
  width: 500px;
  height: 40px;
  display: flex;
  gap: 20px;
`;
const LogoItem = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LogoImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;
const FooterInfo = styled.div`
  margin-top: 10px;
  font-size: 14px;
  text-align: left;
`;
const Line = styled.p`
  margin: 3px 0;
`;

export default function footer() {
  return (
    <Footer>
      <Inside>
        <LeftBox>
          <ImgBox type="left">
            <img
              src={process.env.PUBLIC_URL + "../images/ft_logo.png"}
              alt="로고 이미지"
            />
          </ImgBox>
        </LeftBox>
        <RightBox>
          <ImgList>
            <LogoItem>
              <LogoImg
                src={process.env.PUBLIC_URL + "../images/jeju_logo.png"}
                alt="푸터 이미지01"
              />
            </LogoItem>
            <LogoItem>
              <LogoImg
                src={process.env.PUBLIC_URL + "../images/jejutourism_logo.png"}
                alt="푸터 이미지01"
              />
            </LogoItem>
            <LogoItem>
              <LogoImg
                src={process.env.PUBLIC_URL + "../images/visitjeju_logo.png"}
                alt="푸터 이미지01"
              />
            </LogoItem>
          </ImgList>
          <FooterInfo>
            <Line>
              제주관광공사 JEJU TOURISM ORGANIZATION | 사장 고승철 |
              개인정보관리책임자 문성환 | 사업자등록번호 616-82-21432
            </Line>
            <Line>
              ​(63122) 제주특별자치도 제주시 선덕로 23(연동) 제주웰컴센터
            </Line>
            <Line>
              제주관광정보센터 TEL (064)740-6000 | FAX (064)740-6090~1 | 문의 :
              kareumstay@ijto.or.kr​
            </Line>
            <Line>
              COPYRIGHT ⓒ JEJU TOURISM ORGANIZATION. ALL RIGHTS RESERVED.
            </Line>
          </FooterInfo>
        </RightBox>
      </Inside>
    </Footer>
  );
}
