import React from "react"
import Card from "./project-card.js"
import projectCardStyles from "./project-card.module.css"
import cardWrapStyles from "./card-wrap.module.css"
import blackImage from "../images/black.jpeg"
import greyImage from "../images/grey.jpeg"
import brownImage from "../images/brown.jpeg"
import colorsImage from "../images/color.jpeg"

const CardWrap = () => {
    const cardEnter = (card) => {
        card.style.transform = "translateY(-10px)";
        card.querySelector('p').style.textDecoration = "underline";
    }
    
    const cardLeave = (card) => {
        card.style.transform = "translateY(0)";
        card.querySelector('p').style.textDecoration = "none";
    }
    return (
        <div className={cardWrapStyles.cardWrap }>
        <Card
            title="Chore Group"
            cardEnter={cardEnter}
            cardLeave={cardLeave}
            style={projectCardStyles.card1} 
            imageSrc={blackImage}
            imageAlt="black-image" 
        />
        <Card
            title="Wellnest"
            cardEnter={cardEnter}
            cardLeave={cardLeave}
            style={projectCardStyles.card2} 
            imageSrc={greyImage}
            imageAlt="grey-image"  
        />
        <Card
            title="Project 3"
            cardEnter={cardEnter}
            cardLeave={cardLeave}
            style={projectCardStyles.card3} 
            imageSrc={brownImage}
            imageAlt="brown-image"  
        />
        <Card
            title="Project 4"
            cardEnter={cardEnter}
            cardLeave={cardLeave}
            style={projectCardStyles.card4} 
            imageSrc={colorsImage}
            imageAlt="colors-image"  
        />
    </div>
    )
}

export default CardWrap;

