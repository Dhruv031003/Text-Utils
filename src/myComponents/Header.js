import React from 'react';
import {Link} from 'react-router-dom';

function header(props) {
    return (
        <div>
            <nav>
                <h2>{props.title}</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default header;