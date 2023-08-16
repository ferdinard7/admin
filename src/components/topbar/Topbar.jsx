import React from "react";
import "./topbar.css"; 
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';


function Topbar() {
    return (
     <div className="topbar">
        <div className="topbar-wrapper">
        <div className="top-left">
        <span className="logo">
            Ferdadmin
        </span>
        </div>
        <div className="top-right">
        <div className="topbar-icons-container">
     <NotificationsNoneIcon />
     <span className="topIconBadge">
        2
     </span>
     </div>
     <div className="topbar-icons-container">
     <LanguageIcon />
     <span className="topIconBadge">
        2
     </span>
     </div>
     <div className="topbar-icons-container">
     <SettingsIcon />
     
     </div>
     <img src="/images/young.webp" alt="" className="topAvatar" />

        </div>

        </div>

     </div>
    )
}


export default Topbar;