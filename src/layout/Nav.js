import React from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";

const Nav = (props) => (
    <nav>
        {props.children}
        <ResponsiveAppBar></ResponsiveAppBar>
    </nav>
);

export default Nav;