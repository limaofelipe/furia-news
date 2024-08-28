import styled from "styled-components";

export const Title = styled.h1 `

  color: ${props => props.theme["gray-300"]};
  font-size: 1.5em;
`

export const RecentGamesLayout = styled.div`
  margin-left: 26rem;
  margin-top: 6rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  width: calc(100vw - 26rem);

 
  @media (max-width: 768px){
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    width: calc(100vw - 8rem);

    h1 {
      text-align: left;
    }
  }

  @media (min-width: 768px) and (max-width: 900px) {
    width: calc(100vw - 24rem);
    margin-left: 24rem;
    
    h1 {
      font-size: 1.5rem;
    }
  
   }

   @media (min-width: 900px) and (max-width: 1500px) {
    width: calc(100vw - 28rem);
    margin-left: 26rem;
    
    h1 {
      font-size: 1.5rem;
    }
  
   }
`

export const ResultsLayout = styled.section `
  color: ${props => props.theme["gray-300"]};

  margin-top: 5rem;

  @media (max-width: 768px) {
    width: calc(100vw - 10rem);
    align-items: center;

    div {
      width: calc(100vw - 10rem);
      gap: 1rem;
      padding-inline: 1rem;
     }
  }

  @media (min-width: 385px) and (max-width: 610px){
    div:first-child {
        gap: 1rem;
        flex-direction: column;
        padding-inline: 0;
        text-align: center;
      }

      div:nth-child(2) {
        flex-direction: row;
      }
      div {
        gap: 1rem;
        flex-direction: column-reverse;
        padding-inline: 0;
        text-align: center;
      }
  }

  @media (min-width: 768px) and (max-width: 900px) {
    width: calc(100vw - 24rem);

    
    div {
      width: calc(100vw - 25rem);
      gap: 1rem;
      flex-direction: column;
      padding-inline: 0;
     }

     div:nth-child(2) {
      flex-direction: row;
   
      }

      div:nth-child(3) {
        gap: 1rem;
        flex-direction: column-reverse;
        text-align: center;
      }

  }

  @media (min-width: 900px) and (max-width: 1500px) {
    width: calc(100vw - 28rem);

    div {
      width: calc(100vw - 29rem);
      gap: 1rem;
      padding-inline: 0.5rem;
     }

   }


  

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
  width: calc(100vw - 29rem);
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