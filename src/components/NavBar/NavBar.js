import "./NavBar.css";
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links" >
        <AssessmentIcon className="navbar-icon" />
      </div>
      <div className="navbar-links">
        <MonetizationOnIcon className="navbar-icon" />
      </div>
      <div className="navbar-links">
        <SettingsIcon className="navbar-icon" />
      </div>
    </nav>
  );
};
