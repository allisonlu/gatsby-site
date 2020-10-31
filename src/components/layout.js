import React from "react"
import { Link } from "gatsby"
import "./layout.scss"

const NavLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}> {props.children} </Link>
    </li>
)

export default function Layout ({ children }) {
    return (
        <div>
            <header>
                <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
                    <h1>Page h1 title</h1>
                </Link>
                <ul style={{ listStyle: `none`, float: `right` }}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about/">About</NavLink>
                    <NavLink to="/contact/">Contact</NavLink>
                </ul>
            </header>
            {children}
        </div>
    )
}