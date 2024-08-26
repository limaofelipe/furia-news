import styled from "styled-components";

export const PlayersCardStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-left: 28rem;
  width: 81rem;
  margin-top: 6rem;

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
`