import React from "react";
import Nav from "./Nav";

const Layout = (props) => (
    <div className="">
        {props.children}
    </div>
);

export {Layout, Nav};