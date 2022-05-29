import React from "react";
import Nav from "./Nav";

const Layout = (props) => (
    <div className="pt-6">
        {props.children}
    </div>
);

export {Layout, Nav};