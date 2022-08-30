import React from "react";
import styled from "styled-components";

export default function Search(props) {
  return (
    <StyledDiv>
      <StyledInput
        type="text"
        placeholder="Search something... Try 'Cats'"
        onChange={props.onChange}
        value={props.value}
        onKeyPress={target => {
          target.charCode === 13 && props.fetchImages(props.value);
        }}
      />
      <StyledButton
        data-testid="search-button"
        onClick={() => props.fetchImages(props.value)}
      >
        Search
      </StyledButton>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 25px 5px;
`;

const StyledInput = styled.input`
  flex: 4;
  padding: 2px 5px 2px 5px;
  font-size: 20px;
  min-width: 300px;
  height: 60px;
  box-sizing: border-box;
`;

const StyledButton = styled.button`
  background-color: #31b057;
  color: #fff;
  border: none;
  height: 60px;
  flex: 1;
  min-width: 100px;
  font-size: 20px;
`;
