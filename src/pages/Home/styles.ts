import styled from "styled-components";

export const HomeStyled = styled.main `
  font-size: 1.25rem;
  color: ${props => props.theme["gray-300"]};
  margin-bottom: 1rem;
  margin-top: 6rem;
  margin-left: 28rem; 
  
  
  `

export const NewsGrid = styled.section `

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;

`
