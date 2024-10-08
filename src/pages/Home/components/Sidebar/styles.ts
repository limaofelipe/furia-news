import styled from "styled-components";


interface SidebarProps {
  isVisible?: boolean;
}

export const SidebarStyled = styled.aside<SidebarProps> `
  color: ${props => props.theme["gray-300"]};
  position: fixed;
  border-right: 1px solid ${props => props.theme["gray-600"]};
  margin-left: 10rem;
  height: 100vh;
  width: 15rem;
  overflow: auto;
  margin-top: -2rem;

  footer {
    text-align: center;
    font-size: 0.7rem;
    opacity: 0.5;
  }  


  @media (max-width: 900px) {
    margin-left: 6rem;
  }

  @media (max-width: 768px){
    display: ${props => (props.isVisible ? 'flex' : 'none')};
    visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
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

