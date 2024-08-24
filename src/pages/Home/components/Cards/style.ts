import styled from "styled-components";

export const CardLinkStyled = styled.a`
  margin-top: 2rem;
  border: 1px solid ${props => props.theme["gray-600"]};
  border-radius: 25px;
  padding-inline: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  text-decoration: none;
  color: ${props => props.theme["gray-300"]};
  padding: 2rem;

  transition: 0.2s;

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
    margin-block: 1rem;
    height: 16rem;
    object-fit: fill;
    border-radius: 20px;
  }

  .icon {
      width: 3.0rem;
      height: 3.0rem;
    }

  &:hover {
    border: 1px solid ${props => props.theme["gray-300"]};
  }

  .title {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: fit-content;
}
`