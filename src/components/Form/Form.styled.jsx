import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
`;
export const Input = styled.input`
  width: 200px;
  outline: none;
  border-radius: 15px;
  border: 1px solid #777777;
  padding: 10px;
`;
export const SubmitBtn = styled.button`
  width: 200px;
  background-color: transparent;
  font-size: 15px;
  border: 1px solid #777777;
  border-radius: 10px;
  padding: 7px;
  transition: background-color 500ms ease-in-out, color 500ms ease-in-out;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #777777;
  }
`;

export const Label = styled.label`
  font-size: 20px;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
