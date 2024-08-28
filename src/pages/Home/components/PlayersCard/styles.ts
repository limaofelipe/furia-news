import styled from "styled-components";

export const PlayersCardStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
  
  gap: 2rem;
  margin-left: 27rem;
  width: calc(100vw - 29rem);
  margin-top: 6rem;
  
  h1{
    width: 100vw;
  }

  div {
    background-color: ${props => props.theme["gray-700"]};
    border: 1px solid ${props => props.theme["gray-200"]};
    border-radius: 25px;
  }

  img {
    border-radius: 25px;
    margin-top: 2rem;
    padding: 1rem;
    height: 18rem;
    width: 14rem;
  }

  p{
    color: ${props => props.theme["gray-300"]};
    padding: 1rem;
    font-weight: bold;
    font-size: 2rem;
  }

  @media (min-width: 768px) and (max-width: 900px) {
    margin-left: auto;
    width: calc(100vw - 25rem);
    justify-content: center;

  }
  
  @media (max-width: 768px){
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    width: calc(100vw - 6rem);
  }

  @media (min-width: 900px) and (max-width: 1500px) {
    margin-left: auto;
    width: calc(100vw - 27rem);
    justify-content: center;
  }

   @media (min-width: 1174px) {
    justify-content: left;
  }
`