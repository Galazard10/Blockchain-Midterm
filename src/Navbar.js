import React from 'react';
import {Link} from "react-router-dom"; 

function Navbar(props){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#6F4E37'}}>
                <div className="container-fluid">
                <Link className="navbar-brand mx-2" to="/">Coffee Shop</Link>
                <ul className="navbar-nav mb-2 d-flex justify-content-end">
                    <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/orders">My Orders</Link>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;