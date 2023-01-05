import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SignBtnWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about">About</SidebarLink>
                <SidebarLink to="discover">Discover</SidebarLink>
                <SidebarLink to="services">Services</SidebarLink>
                <SidebarLink to="signup">Sign Up</SidebarLink>
            </SidebarMenu>
            <SignBtnWrap>
                <SidebarRoute to="/signin">Sign In</SidebarRoute>
            </SignBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar