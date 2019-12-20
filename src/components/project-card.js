import React from "react"
import { Link } from "gatsby"
import projectCardStyles from "./project-card.module.css"

const Description = () => {
    return (
        <p className={ projectCardStyles.projectDescription }>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos accusamus aut ratione illum placeat culpa ipsa, nesciunt id, iusto, beatae quo distinctio accusantium!</p>
    )
}

const Preview = (props) => {
    return (
        <Link to={ props.location } className={ props.style } onMouseEnter={ (e) => props.previewEnter(e) } onMouseLeave={ (e) => props.previewLeave(e) }>
            <img src={ props.src } alt={ props.alt } className={ projectCardStyles.projectImage }/>
            <Description />
        </Link>
    )
}

const Card = (props) => {
    const getPreviewHeight = (preview) => {
        return window.getComputedStyle(preview).height;
    }

    const previewEnter = (e) => {
        const height = Number(getPreviewHeight(e.target.parentNode.childNodes[1]).replace('px', '')) + 10
        e.target.parentNode.childNodes[1].style.setProperty('transform', `translateY(-${height}px)`)
    }

    const previewLeave = (e) => {
        e.target.parentNode.childNodes[1].style.setProperty('transform', 'translateY(0)')
    }

    return (
        <Preview 
            previewEnter={previewEnter}
            previewLeave={previewLeave}
            location="/project1/"
            src={props.imageSrc}
            alt={props.imageAlt}
            style={props.style}
        />
    )
}

export default Card