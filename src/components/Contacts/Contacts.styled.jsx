import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: left;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const Text = styled.p``;
export const DeleteBtn = styled.button`
  background-color: transparent;
  font-size: 15px;
  border: 1px solid #777777;
  border-radius: 10px;
  padding: 7px;
  transition: background-color 500ms ease-in-out, color 500ms ease-in-out,
    border 500ms ease-in-out;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #dd0000;
    border: 1px solid #dd0000;
  }
`;
