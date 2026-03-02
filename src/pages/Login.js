import React, { useState } from "react";
import styled from "styled-components";
import GuestLogin from "../components/common/login/GuestLogin";
import MemberLogin from "../components/common/login/MemberLogin";

export const Wrapper = styled.div`
  min-width: 600px;
  margin: 80px auto;
  padding: 0 20px;
`;

export const TabMenu = styled.div`
  display: flex;
  margin-bottom: 40px;
  border-bottom: 1px solid #ddd;
`;

const Tab = styled.div`
  flex: 1;
  text-align: center;
  padding: 20px 0;
  cursor: pointer;
  border-bottom: 2px solid ${({ $active }) => ($active ? "#000" : "#ddd")};
  font-weight: ${({ $active }) => ($active ? "600" : "400")};
`;



export default function Login() {
  const [activeTab, setActiveTab] = useState("member");

  return (
    <Wrapper>
      <TabMenu>
        <Tab
          $active={activeTab === "member"}
          onClick={() => setActiveTab("member")}
        >
          회원
        </Tab>
        <Tab
          $active={activeTab === "guest"}
          onClick={() => setActiveTab("guest")}
        >
          비회원
        </Tab>
      </TabMenu>

      {activeTab === "member" ? <MemberLogin /> : <GuestLogin />}
    </Wrapper>
  );
}
