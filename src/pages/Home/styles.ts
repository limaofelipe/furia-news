import styled from "styled-components";

export const HomeStyled = styled.main `

  font-size: 1.25rem;
  color: ${props => props.theme["gray-300"]};
  margin-bottom: 1rem;


  justify-content: center;
  margin-top: 2rem;
  margin-left: 2rem; 

`

export const NewsGrid = styled.section `
  display: flex;
  flex-direction: column;
  /* grid-template-columns: 1fr 1fr;

  div:first-child {
    grid-column: 1/3;
  }

  div {
    grid-column: 1/2;
  } */
`