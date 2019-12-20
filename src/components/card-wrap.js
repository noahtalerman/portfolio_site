import React from "react"
import Card from "./project-card.js"
import projectCardStyles from "./project-card.module.css"
import cardWrapStyles from "./card-wrap.module.css"
import blackImage from "../images/black.jpeg"
import greyImage from "../images/grey.jpeg"
import brownImage from "../images/brown.jpeg"
import colorsImage from "../images/color.jpeg"

export default () => (
    <div className={cardWrapStyles.cardWrap }>
        <Card
            style={projectCardStyles.card1} 
            imageSrc={blackImage}
            imageAlt="black-image" 
        />
        <Card
            style={projectCardStyles.card2} 
            imageSrc={greyImage}
            imageAlt="grey-image"  
        />
        <Card
            style={projectCardStyles.card3} 
            imageSrc={brownImage}
            imageAlt="brown-image"  
        />
        <Card
            style={projectCardStyles.card4} 
            imageSrc={colorsImage}
            imageAlt="colors-image"  
        />
    </div>
)

