import React from "react"
import Navigation from "./nav.js"

export default ( {children} ) => (
    <div>
        <Navigation />
        {children}
    </div>
)