import React from "react";
import { useLocation } from "react-router-dom";

export default function Search() {
  const location = useLocation();
  const { town, dateRange, guests } = location.state || {};

  console.log("Search 렌더됨");

  return (
    <div style={{ background: "yellow", minHeight: "100vh" }}>
      <h1>검색 결과</h1>
      <p>마을: {town}</p>
      <p>인원: {guests}명</p>
    </div>
  );
}
