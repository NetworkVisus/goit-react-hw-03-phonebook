import * as Styled from './Contacts.styled';

export const Contacts = ({ items, handleDelete }) => {
  return (
    <Styled.List>
      {items.map(el => {
        return (
          <Styled.Item key={el.id}>
            <Styled.Text>
              {el.name}: {el.number}
            </Styled.Text>
            <Styled.DeleteBtn onClick={handleDelete} id={el.id}>
              Delete
            </Styled.DeleteBtn>
          </Styled.Item>
        );
      })}
    </Styled.List>
  );
};
