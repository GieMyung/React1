import React from 'react'
import { SidebarContainer, Icon, CloseIcon,
    SidebarWrapper, SidebarMenu, SidebarLink,
    SidebarBtnContainer, SidebarRoute} from './SidebarE'


const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon><CloseIcon /></Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="seconds" onClick={toggle}>secd</SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}>Acst</SidebarLink>
                    <SidebarLink to="skills" onClick={toggle}>Abcsd</SidebarLink>
                </SidebarMenu>
                <SidebarBtnContainer>
                    <SidebarRoute to='/signin' onClick={toggle}>
                        Sign In
                    </SidebarRoute>
                </SidebarBtnContainer>
            
            </SidebarWrapper>
        </SidebarContainer>
    </>
  )
}

export default Sidebar