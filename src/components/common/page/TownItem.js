import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 1000px;
  margin: 20px auto;
`;

const TownImg = styled.div`
  width: 100%;
  height: 400px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const IntroTxt = styled.div`
  display: flex;
  align-items: center;

  .bigOne {
    font-size: 24px;
    font-weight: 600;
    margin-top: 10px;
  }
`;

const ListPic = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const TownCover = styled.div`
  margin: 20px;
`;

export default function TownItem({
  townImg,
  bigIntro,
  shortIntro,
  ActImg,
  townPic,
}) {
  return (
    <Wrapper>
      <TownImg>
        <img src={townImg} alt="마을 일러" />
      </TownImg>
      <IntroTxt>
        <div className="bigOne">{bigIntro}</div>
        <div>{shortIntro}</div>
      </IntroTxt>
      <ListPic>
        {ActImg.map((act) => {
          return (
            <div key={act.label}>
              <img src={act.img} alt="주요 활동" />
              <div>
                <div>{act.label}</div>
                <div>{act.caption}</div>
              </div>
            </div>
          );
        })}
      </ListPic>
      <TownCover>
        {townPic.map((pic) => (
          <div key={pic.bigTxt}>
            <TownImg>
              <img src={pic.img} alt="마을 풍경" />
            </TownImg>
            <div>
              <div className="bigOne">{pic.bigTxt}</div>
              <div>{pic.smallTxt}</div>
            </div>
          </div>
        ))}
      </TownCover>
    </Wrapper>
  );
}
