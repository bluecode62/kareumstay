import React from 'react'
import {
  Form,
  Label,
  Input,
  CheckboxRow,
  Button,
  LinkRow,
} from "./LoginCommon.styles";

export default function MemberLogin() {
  return (
    <Form>
    <div>
      <Label>아이디(이메일)</Label>
      <Input placeholder="E-mail을 입력해주세요." />
    </div>

    <div>
      <Label>비밀번호</Label>
      <Input type="password" placeholder="비밀번호를 입력해주세요." />
    </div>

    <CheckboxRow>
      <label>
        <input type="checkbox" /> 로그인 유지
      </label>
      <label>
        <input type="checkbox" /> 아이디 저장
      </label>
    </CheckboxRow>

    <Button>로그인</Button>

    <LinkRow>
      <span>아이디찾기</span>|
      <span>비밀번호 찾기</span>|
      <span style={{ color: "#ff7a00" }}>회원가입</span>
    </LinkRow>
  </Form>
);
}
