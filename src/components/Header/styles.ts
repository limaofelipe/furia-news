import styled from "styled-components";


export const HeaderStyled = styled.header `
   div  {
    display: flex;
    justify-content: space-between;
    padding-block: 0.5rem;
    padding-inline: 10rem;

    border-bottom: 1px solid ${(props) => props.theme['gray-600']};

    input {
      background-color: ${(props) => props.theme['gray-700']};
      border: 1px solid ${(props) => props.theme['gray-600']};
      border-radius: 15px;
      width: 35rem;
      padding-left: 1.12rem;
      font-size: 1rem;
      color: ${(props) => props.theme['gray-300']};
      background-image: url("./src/assets/SearchIcon.svg") ;
      background-position: calc(100% - 20px) center;
      background-repeat: no-repeat;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      align-self: center;
      background-color: ${(props) => props.theme["white"]};
      color: ${(props) => props.theme['gray-900']};
      border-radius: 15px;
      text-decoration: none;
      width: 8.75rem;
      height: 2.25rem;
      font-size: 0.8rem;
      font-weight: bold;
      transition: 0.3s;

    }
    a:hover {
      background-color: ${(props) => props.theme["gray-100"]};
    }


  }
`