import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { StyledInput } from "./StyledInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

const CalendarWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 10px;
  z-index: 20;
  box-shadow: 0 10px 30px tgba(0, 0, 0, 0.1);
`;

const Nights = styled.span`
  margin-left: 10px;
  color: #888;
  font-weight: 500;
`;
const GuestWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const GuestButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
  font-size: 12px;

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;
const GuestCount = styled.div`
  min-width: 40px;
  font-weight: 500;
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

export default function ReservationBar({
  town,
  setTown,
  dateRange,
  setDateRange,
  guests,
  setGuests,
  onSearch,
}){
  const [startDate, endDate] = dateRange;
  const [isOpen, setIsOpen] = useState(false);
  const [isDateOpen, setIsDateOpen] = useState(false);

  const dropdownRef = useRef(null);
  const dateRef = useRef(null);

  const increase = () => {
    if (guests < 10) {
      setGuests(guests + 1);
    }
  };

  const decrease = () => {
    if (guests > 1) {
      setGuests(guests - 1);
    }
  };

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

  useEffect(() => {
    if (!isDateOpen) return;

    function handleClickOutside(event) {
      if (dateRef.current && !dateRef.current.contains(event.target)) {
        setIsDateOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDateOpen]);

  const getNights = () => {
    if (startDate && endDate) {
      const diffTime = endDate - startDate;
      return diffTime / (1000 * 60 * 60 * 24);
    }
    return 0;
  };

  return (
    <Wrap>
      <BarBox ref={dropdownRef}>
        <BarTitle>마을선택</BarTitle>
        <StyledInput
          value={town}
          onClick={() => setIsOpen(!isOpen)}
          placeholder="마을선택"
        />
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
      <BarBox type="big" ref={dateRef}>
        <BarTitle>날짜</BarTitle>
        <div onClick={() => setIsDateOpen(!isDateOpen)}>
          {startDate && endDate ? (
            <>
              {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
              <Nights>{getNights()}박</Nights>
            </>
          ) : (
            "날짜를 선택하세요"
          )}
        </div>
        {isDateOpen && (
          <CalendarWrapper>
            <DatePicker
              selectsRange
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => {
                setDateRange(update);

                if (update[0] && update[1]) {
                  setIsDateOpen(false);
                }
              }}
              minDate={new Date()}
              inline
            />
          </CalendarWrapper>
        )}
      </BarBox>
      <BarBox>
        <BarTitle>인원</BarTitle>

        <GuestWrapper>
          <GuestCount>{guests}명</GuestCount>
          <GuestButton onClick={decrease} disabled={guests === 1}>
            -
          </GuestButton>
          <GuestButton onClick={increase} disabled={guests === 10}>
            +
          </GuestButton>
        </GuestWrapper>
      </BarBox>
      <Button type="button" onClick={onSearch}>검색</Button>
    </Wrap>
  );
}
