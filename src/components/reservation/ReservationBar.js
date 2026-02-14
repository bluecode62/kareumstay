import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { StyledInput } from "./StyledInput";

const Wrap = styled.div`
  width: 1000px;
  margin: 100px auto;
  display: flex;
  justify-content: center;
  gap: 10px;
`;
const BarBox = styled.div`
  width: ${({ type }) => (type === "big" ? "400px" : "150px")};
  border: 1px solid #3d3d3d;
  border-radius: 10px;
  font-weight: 500;
  font-size: 18px;
  flex: 0 0 auto;
  text-align: left;
  padding: 10px 20px;
  box-sizing: border-box;
  position: relative;
`;
const BarTitle = styled.div`
  font-size: 14px;
  color: #3d3d3d;
  margin-bottom: 2px;
`;

const TownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 8px;
  padding: 0;
  list-style: none;
  z-index: 10;
`;

const TownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const towns = [
  "김녕리",
  "세화리",
  "가시리",
  "교래리",
  "수산리",
  "한남리",
  "동백마을",
  "의귀리",
  "호근마을",
  "하효마을",
  "신창리",
  "저지리",
];

export default function ReservationBar() {
  const [town, setTown] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <Wrap>
      <BarBox ref={dropdownRef}>
        <BarTitle>마을선택</BarTitle>
        <StyledInput value={town} onClick={() => setIsOpen(!isOpen)} placeholder="마을선택"/>
        {isOpen && (
          <TownList>
            {towns.map((item) => (
              <TownItem
                key={item}
                onClick={() => {
                  setTown(item);
                  setIsOpen(false);
                }}
              >
                {item}
              </TownItem>
            ))}
          </TownList>
        )}
      </BarBox>
      <BarBox type="big">
        <BarTitle>날짜</BarTitle>
        날짜
      </BarBox>
      <BarBox>
        <BarTitle>인원</BarTitle>
        1명
      </BarBox>
      <Button>검색</Button>
    </Wrap>
  );
}
