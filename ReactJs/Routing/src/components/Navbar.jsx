import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.webp';


const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  {
    label: "Dashboard",
    children: [
      {
        label: "Course",
        children: [
          { path: "dashboard/courses/coding", label: "Coding" },
          { path: "dashboard/courses/management", label: "Management" }
        ]
      },
      { path: "dashboard/college", label: "College" },
      { path: "dashboard/community", label: "Community" }
    ]
  }
];

const linkStyle = ({ isActive }) => ({
  textDecoration: "none",
  color: isActive ? "lightGreen" : "whiteSmoke",
  fontSize: "20px",
  fontWeight: "600"
});

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null)
  const [hoveredSubmenu, setHoveredSubmenu] = useState(null)

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 50px",
      backgroundColor: "#5b728a",
    }}>
      <img src={Logo} alt="Logo" style={{ height: '100px' }} />
      <ul style={{
        display: "flex",
        listStyle: "none",
        gap: '20px',
        margin: 0,
        padding: 0,
        position: "relative",

      }}>
        {
          navItems.map((item, index) => (

            <li
              key={index}
              onMouseEnter={() => setHoveredMenu(item.label)}
              onMouseLeave={() => {
                setHoveredMenu(null)
                setHoveredSubmenu(null)
              }}
            >

              {
                item.path ?

                  (<NavLink to={item.path} style={linkStyle}>{item.label}</NavLink>)
                  : <span style={{ ...linkStyle({ isActive: false }), cursor: "pointer" }}>{item.label}</span>
              }

              {item.children && hoveredMenu === item.label && (
                <ul style={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  backgroundColor: "#5b728a",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  zIndex: 10,
                  minWidth: "165px"
                }}>
                  {
                    item.children.map((child, index) => (
                      <li key={index}
                        onMouseEnter={() => child.children && setHoveredSubmenu(child.label)}
                        onMouseLeave={() => child.children && setHoveredSubmenu(null)}
                        style={{ position: "relative" }}
                      >
                   
                        {child.path ? (
                          <NavLink
                            to={child.path}
                            style={{
                              ...linkStyle({ isActive: false }),
                              display: 'block',
                              padding: '10px'
                            }}
                          >
                            {child.label}
                          </NavLink>
                        ) : (
                          <span
                            style={{
                              ...linkStyle({ isActive: false }),
                              display: 'block',
                              padding: '10px',
                              cursor: "pointer"
                            }}
                          >
                            {child.label}
                          </span>
                        )}

                        {
                          child.children && hoveredSubmenu === child.label && (
                            <ul style={{
                              position: "absolute",
                              top: 0,
                              right: "100%",
                              backgroundColor: "green",
                              listStyle: "none",
                              padding: 0,
                              margin: 0,
                              zIndex: 20,
                              minWidth: "150px"
                            }}>
                              {
                                child.children.map((subChild, subIndex) => (
                                  <li key={subIndex}>
                                    <NavLink to={subChild.path} style={{ ...linkStyle({ isActive: false }), display: 'block', padding: '10px' }}>
                                      {subChild.label}
                                    </NavLink>
                                  </li>
                                ))
                              }
                            </ul>
                          )
                        }
                      </li>
                    ))
                  }

                </ul>
              )}
            </li>

          ))
        }

      </ul>
    </nav>
  );
};

export default Navbar;
