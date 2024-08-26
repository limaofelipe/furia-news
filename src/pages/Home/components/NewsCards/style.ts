import styled from "styled-components";

export const CardLinkStyled = styled.a`
  margin-top: 2rem;
  border: 1px solid ${props => props.theme["gray-600"]};
  border-radius: 25px;
  padding-inline: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-decoration: none;
  color: ${props => props.theme["gray-300"]};
  transition: 0.2s;
  width: 26rem;
  height: 31rem;

  h3{
    font-size: 1.5rem;
    margin-top: 2rem;
  }

  p {
    font-size: 1rem;
    font-weight: normal;
    margin-top: 0.5rem;
  }




  img {
    height: 14rem;
    width: 23rem;
    margin-block: 1rem;
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
    
}
`