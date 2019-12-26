import React from "react"
import { Link } from "gatsby"
import projectCardStyles from "./project-card.module.css"

const Info = (props) => {
    return (
        <div className={ projectCardStyles.projectInfo }>
            <p className={ projectCardStyles.projectTitle }>{ props.title }</p>
            <p className={ projectCardStyles.projectDescription }>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos accusamus aut ratione illum placeat culpa ipsa.</p>
        </div>
    )
}

const Preview = (props) => {
    let currentCard = null;

    const handleMouseOver = (e) => {
        if (currentCard) return;
        let target = e.target.closest(`a`);
        if (!target) return;
        currentCard = target;
        props.cardEnter(currentCard);
    }

    const handleMouseLeave = (e) => {
        if (!currentCard) return;
        let relatedTarget = e.relatedTarget;
        while (relatedTarget) {
            if (relatedTarget === currentCard) return;
            relatedTarget = relatedTarget.parentNode;
        }
        props.cardLeave(currentCard);
        currentCard = null;
    }

    return (
        <Link 
            to={ props.location } 
            className={ `${projectCardStyles.card} ${props.style}` } 
            onMouseOver={ (e) => handleMouseOver(e) } 
            onMouseOut={ (e) => handleMouseLeave(e) }
            onFocus={ (e) => handleMouseOver(e) }
            onBlur={ (e) => handleMouseLeave(e) }
        >
            <Info
                title={props.title} 
            />
            <div>
                <img src={ props.src } alt={ props.alt } className={ projectCardStyles.projectImage }/>
            </div>
        </Link>
    )
}

const Card = (props) => {

    return (
        <Preview
            cardEnter={props.cardEnter}
            cardLeave={props.cardLeave}
            title={props.title}
            location="/project/"
            src={props.imageSrc}
            alt={props.imageAlt}
            style={props.style}
        />
    )
}

export default Card