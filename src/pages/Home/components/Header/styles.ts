import styled from "styled-components";


export const HeaderStyled = styled.header `
    position: fixed;
    top: 0%;
    width: 100%;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    padding-block: 0.5rem;
    padding-inline: 10rem;
    background-color: ${(props) => props.theme['gray-900']};
    border-bottom: 1px solid ${(props) => props.theme['gray-600']};
    overflow: auto;
    
    input {
      background-color: ${(props) => props.theme['gray-700']};
      border: 1px solid ${(props) => props.theme['gray-600']};
      border-radius: 15px;
      width: 30rem;
      padding-left: 1.12rem;
      font-size: 1rem;
      color: ${(props) => props.theme['gray-300']};
      background-image: url("./src/assets/SearchIcon.svg") ;
      background-position: calc(100% - 20px) center;
      background-repeat: no-repeat;
    }

    .button {
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
    .button:hover {
      background-color: ${(props) => props.theme["gray-100"]};
    }
`
