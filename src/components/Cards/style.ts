import styled from "styled-components";

export const CardStyled = styled.div `
  margin-top: 2rem;
  width: 55rem;
  height: 25rem;
  border: 1px solid ${props => props.theme["gray-600"]};
  border-radius: 25px;
  padding-inline: 2rem;

  h3{
    font-size: 2rem;
    margin-top: 2rem;
    margin-left: 5rem;
  }

  p {
    font-size: 1rem;
    font-weight: normal;
    margin-top: 0.5;
    margin-left: 5rem;
  }

  img {
    width: 45rem;
    height: 16rem;
    object-fit: cover;
    /* max-width: 45rem;
    max-height: 16rem; */
    /* width: auto;
    height: auto; */
    margin-top: 1rem;
    margin-left: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

  }
/* url(https://noticias.maisesports.com.br/wp-content/uploads/2023/03/mwzera-FURIA.jpg" alt="Imagem do Jogardor mwzera de braços cruzados) */
`
