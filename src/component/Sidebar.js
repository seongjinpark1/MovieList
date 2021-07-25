import React from 'react';
import { Link } from 'react-router-dom';
import '../component/Sidebar.css';

const Side = () => {
    return (
        <ul className="nav">
            <li className="sideHome">
                <Link to="/">Home</Link>
            </li>
            <li className="sideAbout">
                <Link to="/about">About</Link>
            </li>
        </ul>
    );
};

export default Side;
