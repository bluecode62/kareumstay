import styled from "styled-components";

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Label = styled.label`
  text-align: left;
  font-size: 14px;
  margin-bottom: 6px;
  display: block;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  height: 56px;
  padding: 0 16px;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  background: #f9f9f9;
  font-size: 14px;
  outline: none;

  &::placeholder {
    color: #bbb;
  }

  &:focus {
    border-color: #4a7efc;
    background: #fff;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 56px;
  padding: 0 16px;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  background: #f9f9f9;
  font-size: 14px;
  outline: none;
`;

export const CheckboxRow = styled.div`
  display: flex;
  gap: 20px;
  font-size: 14px;
  color: #555;
`;

export const Button = styled.button`
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 14px;
  background: #ff7a00;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
  transition: 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const LinkRow = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #ff7a00;

  span {
    margin: 0 10px;
    cursor: pointer;

    &:hover {
      color: #4a7efc;
    }
  }
`;
