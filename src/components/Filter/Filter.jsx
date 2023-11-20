import * as Styled from './Filter.styled';

export const Filter = ({ handleFilter }) => {
  return (
    <Styled.FilterDiv>
      <Styled.Title>Filter</Styled.Title>
      <Styled.InputDiv>
        <Styled.Label htmlFor="filter">Filter Contacts by name</Styled.Label>
        <Styled.Input
          name="filter"
          onChange={handleFilter}
          placeholder="E.g. Aiden Pearce"
        ></Styled.Input>
      </Styled.InputDiv>
    </Styled.FilterDiv>
  );
};
