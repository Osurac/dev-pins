import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
    <nav>
        <ul className="bg-zinc-900 shadow flex space-x-4 justify-end">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/pin">Links</Link>
            </li>
            <li>
                <Link to="/yt">Youtube</Link>
            </li>
            <li>
                <Link to="/pod">Podcast</Link>
            </li>
        </ul>
    </nav>
);

export default Nav;