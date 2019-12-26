import React from "react"
import Navigation from "./nav.js"
import Hero from "../components/hero.js"
import Container from "../components/container.js"
import { BrowserRouter } from "react-router-dom";
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

const shouldUpdateScroll = (prevRouterProps, { location, history }) => {
    prevRouterProps && location.pathname !== prevRouterProps.location.pathname
    console.log(location)
}

export default ( {children} ) => (
    <BrowserRouter>
        <ScrollContext location={window.location} shouldUpdateScroll={shouldUpdateScroll}>
            <App 
                children={children}
            />
        </ScrollContext>
    </BrowserRouter>
)