import styled from "styled-components";

export const LargeSection = styled.div`
  width: 1000px;
  margin: 30px auto;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const FestivalArea = styled.p`
  margin: 10px 0;
  font-weight: 600;
  font-size: 20px;
`;

export const MoreSchedule = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  color: #f05423;
  transition: color 0.2s ease;

  &:hover {
    color: #000;
  }
`;

export const LargeCardWrapper = styled.div`
  display: flex;
  justify-contents: space-between;
  gap: 20px;
`;

export const LargeCardBox = styled.div`
  width: 490px;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }
`;

export const LargeImage = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  text-align: left;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.97), rgba(0, 0, 0, 0));

  color: #fff;

  h3 {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  p {
    font-size: 15px;
  }
`;
