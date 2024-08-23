import styled from "styled-components";

export const CardStyled = styled.div `
  margin-top: 2rem;
  width: 50rem;
  height: 25rem;
  border: 1px solid ${props => props.theme["gray-600"]};
  border-radius: 25px;
  padding-inline: 2rem;

  h3{
    font-size: 2rem;
    margin-top: 2rem;
    
  }

  p {
    font-size: 1rem;
    font-weight: normal;
    margin-top: 0.5rem;
  }

  img {
    margin-top: 1rem;
    width: 45rem;
    height: 16rem;
    object-fit: fill;
    border-radius: 20px;
  }

  `

