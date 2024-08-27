import styled from "styled-components";

export const NewsStyled = styled.main `
  font-size: 1.25rem;
  color: ${props => props.theme["gray-300"]};
  margin-bottom: 1rem;
  margin-top: 6rem;
  margin-left: 28rem; 



  @media (max-width: 900px) {
    margin-left: 24rem;
  }

  @media (max-width: 768px){
    margin-left: 0; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      text-align: center;
    }

    
  }
  
  
  `

export const NewsGrid = styled.section `
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  max-width: 81rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  
  @media (min-width: 768px) and (max-width: 1200px){
    grid-template-columns: 1fr;
  }

  @media (min-width: 1200px) and (max-width: 1500px) {
    grid-template-columns: 1fr 1fr;
  }

   @media (min-width: 1500px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

`
