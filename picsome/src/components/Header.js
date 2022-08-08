import React from "react"
import {Link} from "react-router-dom"

function Header() {
    return (
        <header>
            <Link to="http://localhost:3002/"><h2>Pic Some</h2></Link>
            <Link to="http://localhost:3002/cart"><i className="ri-shopping-cart-line ri-fw ri-2x"></i></Link>
        </header>
    )
}

export default Header
