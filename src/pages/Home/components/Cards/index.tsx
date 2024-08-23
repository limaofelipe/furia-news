import { CardStyled } from "./style";


interface cardProps {
  title: string,
  caption: string,
  imageUrl: string,
  
}

export function Card({ title, caption, imageUrl }:cardProps ) {
  return (
    <CardStyled>
      <h3>{title}</h3>
      <p>{caption}</p>
      <img src={imageUrl}/>
    </CardStyled>
  );
};