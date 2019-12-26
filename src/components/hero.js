import React from "react"
import heroStyles from "../components/hero.module.css"

const SubText = () => {
    return (
        <p className={ heroStyles.heroSubtext }>
            I’m finishing my final semester as a Cognitive Science and Economics B.S. at the University of Michigan. Interested in collaborating with users to design and build needed technology.
        </p>
    )
}

const SubTitle = (props) => {
    return (
        <h4 className={heroStyles.heroSubtitle}>{ props.subTitle }</h4>
    )
}

const Title = (props) => {
    return (
        <h3 className={ heroStyles.heroTitle }>{ props.title }</h3>
    )
}

const Hero = () => {
    return (
        <div className={ heroStyles.heroMain }>
            <Title
                title="Noah Talerman"
            />
            <SubTitle
                subTitle="Designer and Developer" 
            />
            <SubText />
        </div>
    )
}

export default Hero

 