import { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import "./NavBar.css";
export const NavBar = () => {
  const [value, setValue] = useState(0);

  return (
    <Box >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(newValue);
        }}
        className="navbar"
      >
        <BottomNavigationAction label="Records" icon={<AssessmentIcon />} />
        <BottomNavigationAction label="Home" icon={<MonetizationOnIcon />} />
        <BottomNavigationAction label="Settings" icon={< SettingsIcon/>} />
      </BottomNavigation>
    </Box>
  );
};
