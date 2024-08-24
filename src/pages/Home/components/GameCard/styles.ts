import styled from "styled-components";

export const Title = styled.h1 `

  color: ${props => props.theme["gray-300"]};
  font-size: 1.5em;
`

export const RecentGamesLayout = styled.div`
  margin-left: 28rem;
  margin-top: 5.5rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
`

export const ResultsLayout = styled.section `
  color: ${props => props.theme["gray-300"]};

  margin-top: 5rem;

`

export const GameResult = styled.div `
  background-color: ${props => props.theme["gray-600"]};
  color: ${props => props.theme["gray-300"]};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15rem;

  margin-top: 1rem;

  font-weight: bold;
  width: 74rem;
  height: 8rem;

  div {
    display: flex;
    align-items: center;
    gap: 2rem;
  }


`

export const GamesPoints = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  font-size: 1.5rem;
`

export const Teste = styled.div `

`