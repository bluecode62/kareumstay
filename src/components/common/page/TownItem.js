import React from "react";
import styled from "styled-components";
import { ContentWrapper } from "../../layout/Layout";
import AccommodationList from "../../search/AccommodationList";
import { accommodationData } from "../../../data/accommodationData";

const Wrapper = styled.div`
  width: 1000px;
  margin: 20px auto;
`;
const Title = styled.div`
  text-align: left;
  font-size: 24px;
  font-weight: 600;
  border-bottom: 1px solid #c3c3c3;
  padding: 20px 0;
`;

const TownImg = styled.div`
  width: 100%;
  height: 400px;
  position: relative;

  & img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
  }
`;

const IntroTxt = styled.div`
  display: flex;
  align-items: center;
  padding: 60px 40px;
  gap: 50px;
  text-align: left;
  border: 1px solid #c3c3c3;

  .bigOne {
    max-width: 450px;
    font-size: 24px;
    font-weight: 600;
    word-break: keep-all;
  }
  .smallOne {
    max-width: 450px;
    word-break: keep-all;
    color: #3D3D3D;
  }
`;

const ListWrap = styled.div``;

const ListBox = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 40px 0;
`;

const ListImg = styled.div`
  width: 100%;
  width: 500px;
  height: 300px;
  overflow: hidden;
  border-radius: 5px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const ListTxt = styled.div`
  text-align: left;
  width: 400px;

  .title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .text {
    max-width: 400px;
    color: #3D3D3D;
  }
`;

const TownCover = styled.div``;

const PicBox = styled.div`
  width: 100%;
`;

const CardTxt = styled.div`
  width: 100%;
  padding: 40px 20px;
  border: 1px solid #c3c3c3;
  background: #fff;
  display: flex;
  align-items: center;
  text-align: left;
  justify-content: space-between;
  box-sizing: border-box;
  gap: 40px;

  .leftBig {
    width: 500px;
    font-size: 24px;
    font-weight: 600;
    word-break: keep-all;
  }

  .rightSmall {
    max-width: 550px;
    word-break: keep-all;
    color: #3D3D3D;
  }
`;

export default function TownItem({
  townName,
  townImg,
  bigIntro,
  shortIntro,
  ActImg,
  townPic,
}) {
  const filteredList = accommodationData.filter(
    (item) => item.town === townName,
  );
  return (
    <Wrapper>
      <TownImg>
        <img src={townImg} alt="마을 일러" />
      </TownImg>
      <IntroTxt>
        <div className="bigOne">{bigIntro}</div>
        <div className="smallOne">{shortIntro}</div>
      </IntroTxt>
      <ListWrap>
        {ActImg.map((act) => {
          return (
            <ListBox key={act.label}>
              <ListImg>
                <img src={act.img} alt="주요 활동" />
              </ListImg>
              <ListTxt>
                <div className="title">{act.label}</div>
                <div className="text">{act.caption}</div>
              </ListTxt>
            </ListBox>
          );
        })}
      </ListWrap>
      <TownCover>
        {townPic.map((pic) => (
          <ListBox key={pic.bigTxt}>
            <PicBox>
              <img src={pic.img} alt="마을 풍경" />
              <CardTxt>
                <div className="leftBig">{pic.bigTxt}</div>
                <div className="rightSmall">{pic.smallTxt}</div>
              </CardTxt>
            </PicBox>
          </ListBox>
        ))}
      </TownCover>

      <Title>숙소 리스트</Title>
      <ContentWrapper noPadding>
        <AccommodationList
          list={filteredList}
          onCardClick={(id) => console.log(id)}
        />
      </ContentWrapper>
    </Wrapper>
  );
}
