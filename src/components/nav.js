import React from "react"
import { Link } from "gatsby"
import navStyles from "../components/nav-styles.module.css"
import globalStyles from "../components/global.css"
import { useEffect } from "react"

const NavElement = (props) => {
    return (
        <li className={ navStyles.navElement }>
            <Link 
                to={props.location} 
                onMouseEnter={ (e) => props.linkEnter(e) } 
                onMouseLeave={ (e) => props.linkLeave(e) }
                className={ navStyles.navElementText }
                activeClassName={ `${navStyles.navElementText} ${navStyles.navElementTextActive}` }>
                { props.text }
            </Link>
        </li>
    )
}

const Navigation = () => {

    useEffect(() => {
        console.log('rerender')
    })

    const linkEnter = (e) => {
        e.target.parentNode.style.setProperty('transform', 'translateY(-5px)');
    }

    const linkLeave = (e) => {
        e.target.parentNode.style.setProperty('transform', 'translateY(0)');
    }

    return (
        <div className={ navStyles.mainNav }>
            <ul className={ navStyles.mainNavInner }>
                <NavElement 
                    text="Projects"
                    location="/"
                    linkEnter={linkEnter}
                    linkLeave={linkLeave}
                />
                <NavElement 
                    text="About"
                    location="/about/"
                    linkEnter={linkEnter}
                    linkLeave={linkLeave}
                />
            </ul>
        </div>
    )
}

export default React.memo(Navigation)