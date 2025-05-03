import React from 'react'
import { NavLink } from 'react-router-dom'
const sideLinks = [
    { path: "/page1", label: "Page1" },
    { path: "/page2", label: "Page2" }
]

const linkStyle = ({ isActive }) => ({
    display: "block",
    padding: "10px 20px",
    textDecoration: "none",
    color: isActive ? "white" : "#ddd",
    backgroundColor: isActive ? "#3d4e60" : "transparent",
    fontWeight: "500",
    borderRadius: "5px"
})

const SideBar = () => {
    return (
        <div style={{
            width: "200px",
            backgroundColor: "#2f3b47",
            height: "100vh",
            paddingTop: "20px",
            boxSizing: "border-box"
        }}>
            {sideLinks.map(({ path, label }) => (
                <NavLink key={path} to={path} style={linkStyle}>
                    {label}
                </NavLink>
            ))}
        </div>)
}

export default SideBar