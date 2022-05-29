import React from "react";
import ResponsiveAppBar from "../components/General/ResponsiveAppBar";

const Nav = (props) => (
    <nav>
        
        <ResponsiveAppBar>{props.children}</ResponsiveAppBar>
    </nav>
);

export default Nav;