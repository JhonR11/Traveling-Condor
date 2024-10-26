import React,{useState} from "react";
import Card from "./Card";

const Cards = () =>{
    const[card,setcard]=useState();

    return(
        
        <div className='ContenedorCard h1'>
            {Cards.map((card)=>{
            <Card card={card.card} titulo={card.titulo}/>
            })}
        </div>
    );
};
export default Cards;