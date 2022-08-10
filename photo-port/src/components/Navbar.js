import React, {useEffect, useState, UseState} from "react";
import {Link, useLocation} from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();
    useEffect(() => {setExpandNavbar(false);
}, [location])};

return
 (<div className="navbar" id={expandNavbar ? "open" : "close"}>
        <div className="togglebutton">
            <button 
            onClick={() => {
                setExpandNavbar((previous) => !previous);
            }} >
                <ReorderIcon/>
                </button> 
        </div>
        <div className="links">
            <link to="Home">Home</link>
            <link to="Projects">Projects</link>
            <link to="Resume">Resume</link>
            <link to="About">About</link>
            <link to="Contact">Contact</link>
        </div>
    </div>);
export default Navbar;