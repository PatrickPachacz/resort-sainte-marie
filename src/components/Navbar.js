import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React from 'react';

export default function Navbar() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <div className="saint">⚜️Sainte-Marie Resort</div>
                <ul>
                    <CustomLink to="/rooms" className="book">Book Now</CustomLink>
                    <CustomLink to="/activities" className="nextNav">Activities</CustomLink>
                    <CustomLink to="/dining" className="nextNav">Dining</CustomLink>
                    <CustomLink to="/contact" className="nextNav">Contact</CustomLink>
                </ul>
            </nav>
           
            
        </div>
    )
}
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end:true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}