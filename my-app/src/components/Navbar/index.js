import React from 'react'
import {FaBars, FaDocker} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarE'

const Navbar = ({ toggle }) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    <FaDocker />
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">
                            About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="projects">
                            Projects
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="skills">
                            Skills
                        </NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>
                        Sign-Up
                    </NavBtnLink>
                </NavBtn>
                
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar