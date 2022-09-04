import { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
export const NavBar = () => {
  const [value, setValue] = useState(0);
  let navigate = useNavigate();
  const handleNavChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
    switch (newValue) {
      case 0:
        navigate("/reports");
        break;
      case 1:
        navigate("/");
        break;
      case 2:
        navigate("/settings");
        break;
      default:
        break;
    }
  };

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleNavChange}
        className="navbar"
      >
        <BottomNavigationAction label="Records" icon={<AssessmentIcon />} />
        <BottomNavigationAction label="Home" icon={<MonetizationOnIcon />} />
        <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
      </BottomNavigation>
    </Box>
  );
};
