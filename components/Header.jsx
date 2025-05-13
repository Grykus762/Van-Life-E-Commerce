import React from "react"
import { Link, NavLink } from "react-router-dom"
import imageUrl from "/assets/images/avatar-icon.png"

export default function Header() {

    const [logged, setLogged] = React.useState(localStorage.getItem("loggedin"))

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    function fakeLogOut() {
        localStorage.removeItem("loggedin")
        setLogged(false)
    }

    React.useEffect(()=>{
        setLogged(localStorage.getItem("loggedin"))
    })

    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink
                    to="/host"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Host
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink
                    to="/vans"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Vans
                </NavLink>
                <Link to="login" className="login-link">
                    <img
                        src={imageUrl}
                        className="login-icon"
                    />
                </Link>
                {logged? <Link to="login" className="btn-logout">
                    <button className="btn-logout" onClick={fakeLogOut}>Sign Out</button>
                </Link>:null}      
            </nav>
        </header>
    )
}