import React from 'react';
import { Link } from 'react-router-dom';

const PortFolioPage = () => (
    <div>
        <h2>Portfolio</h2>
        <p>Take a look at some of the things I have built:</p>
        <Link to="/portfolio/1">Item One</Link><br/>
        <Link to="/portfolio/2">Item Two</Link>
    </div>
);

export default PortFolioPage;