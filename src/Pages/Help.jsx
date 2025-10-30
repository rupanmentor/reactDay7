import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Help = () => {
    return (
        <div>
            <h1>Help page</h1>
            <Link to="reach">Reach Out</Link>
            <Outlet />
        </div>
    );
};

export default Help;