import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            whoami
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>
            ls projects
          </SidebarLink>
          <SidebarLink to="socials" onClick={toggle}>
            Socials
          </SidebarLink>
          <SidebarLink to="blog" onClick={toggle}>
            Blog
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
