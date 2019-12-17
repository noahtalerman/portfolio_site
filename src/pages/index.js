import React from "react"
import Container from "../components/container.js"
import Hero from "../components/hero.js"
import HollowButton from "../components/hollow-button.js"

export default () => (
    <Container>  
        <Hero />
        <HollowButton 
            text="Resume"
        />
    </Container>
)