import React from "react"
import Navigation from "./nav.js"
import Hero from "../components/hero.js"
import Container from "../components/container.js"
import { ScrollContext } from "gatsby-react-router-scroll"

const App = (props) => {
    return (
        <Container>
            <Hero />
            <Navigation />
            {props.children}
        </Container>
    );
}

export default ( {children} ) => (
    <ScrollContext>
        <App 
            children={children}
        />
    </ScrollContext>
)