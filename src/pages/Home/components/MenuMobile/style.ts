import styled from "styled-components";


interface toggleMenuProps {
  isVisible?: boolean;
}

export const ToggleMenuMobileStyled = styled.aside<toggleMenuProps> `
  color: ${props => props.theme["gray-300"]};
  border-right: 1px solid ${props => props.theme["gray-600"]};
  display: flex;
  flex-direction: column;
  justify-content: center;

  footer {
    text-align: center;
    font-size: 0.7rem;
    margin-top: 3rem;
    opacity: 0.5;
  }  

`


export const ListLink = styled.a `
a {
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 0.5rem;
  text-decoration: none;
  color: ${props => props.theme["gray-300"]};
  padding: 0.3rem;
  
  margin-top: 2.5rem;
  margin-bottom: 1rem;

  h2{
    font-size: 1rem;
  }
}

a:hover {
  background-color: ${props => props.theme["gray-600"]};
}

`

export const ListLinkGames = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  h2 {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;

    img {
      width: 1.5rem;
      height: 1.5rem;
    }
    }

  a {
    text-decoration: none;
    display: flex;
    gap: 0.5rem;
    color: ${props => props.theme["gray-300"]};
    padding: 0.3rem;
    transition: 0.3s;
    
  }

  a:hover {
  background-color: ${props => props.theme["gray-600"]};
  }

  ul {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      list-style: none;
      margin-left: 0.75rem;
      margin-top: 0.5rem;
      margin-right: 1rem;
    }
`

export const Divider = styled.div`
  border: 1px solid ${props => props.theme["gray-600"]};
  margin-right: 1rem;
`

