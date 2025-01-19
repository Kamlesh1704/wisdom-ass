import React, { useContext } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { themeContext } from "../context/DataContext";
import {NavbarContainer,
  NavbarBrand,
  NavbarIcons,
  IconButton} from './styledComponent.js'

export default function Navbar() {
  const { lightTheme, toggleLightTheme } = useContext(themeContext);

  return (
    <NavbarContainer lightTheme={lightTheme}>
      <NavbarBrand>User Directory</NavbarBrand>
      <NavbarIcons>
        {lightTheme ? (
          <IconButton lightTheme={lightTheme} aria-label="Toggle Dark Mode" onClick={toggleLightTheme}>
            <MdDarkMode size={24} />
          </IconButton>
        ) : (
          <IconButton lightTheme={lightTheme} aria-label="Toggle Light Mode" onClick={toggleLightTheme}>
            <CiLight size={24} />
          </IconButton>
        )}
      </NavbarIcons>
    </NavbarContainer>
  );
}
