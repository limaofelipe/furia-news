import { CardLinkStyled } from "./style";


interface cardProps {
  title: string,
  tag: string,
  icon: string,
  caption: string,
  imageUrl?: string,
  className?:string,
  newsUrl: string
  
}

export function Card({ title,
   caption,
   imageUrl,
   className,
   newsUrl,
   icon }:cardProps ) {
    return (
      <CardLinkStyled className={className} href={newsUrl} target="_blank">
          <div>
              <div className="title">
                <img className="icon" src={icon} />
                <div>
                  <h3>{title}</h3>
                  <p>{caption}</p>
                </div>
              </div>
              <img src={imageUrl}/>
          </div>
      </CardLinkStyled>
    );
};