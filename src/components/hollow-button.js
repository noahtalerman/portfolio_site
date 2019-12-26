import React from "react"
import hollowButtonStyles from "./hollow-button.module.css"

const buttonEnter = (e) => {
    e.target.style.setProperty('transform', 'translateY(-5px)')
}

const buttoneLeave = (e) => {
    e.target.style.setProperty('transform', 'translateY(0)')
}

export default (props) => (
    <button 
        className={ hollowButtonStyles.hollowButton }
        onMouseOver={buttonEnter}
        onMouseut={buttoneLeave}
        onFocus={buttonEnter}
        onBlur={buttoneLeave}
    >
        { props.text }
    </button>
)