import React from 'react'
import {
  Form,
  Label,
  Input,
  Select,
  Button,
} from "./LoginCommon.styles";


export default function GuestLogin() {
  return (
    <Form>
    <div>
      <Label>카테고리</Label>
      <Select>
        <option>선택</option>
        <option>예약조회</option>
      </Select>
    </div>

    <div>
      <Label>이름</Label>
      <Input placeholder="이름을 입력해주세요." />
    </div>

    <div>
      <Label>휴대전화</Label>
      <Input placeholder="- 없이 번호만 입력해주세요." />
    </div>

    <div>
      <Label>예약번호</Label>
      <Input placeholder="예약번호를 입력해주세요." />
    </div>

    <Button>확인</Button>
  </Form>
);
}
