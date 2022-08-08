import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"

import App from "./App"

ReactDOM.render(
    <Router>
        <div>
        <App />
        <h1>hi there app </h1>
        </div>
        
    </Router>, 
    document.getElementById("root")
)
