import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './Header.css';


class Header extends Component {
    static handleLogout() {
        localStorage.clear();
        window.location.reload();
    }

    render() {
        const loggedUser = this.props.username;
        const adminBtn = this.props.isAdmin ?
            <Link to="/create">Create</Link> :
            null;

        return (
            <header>
                <Link to="/" className="logo">CARS SYSTEM</Link>
                <div className="header-right">
                    {
                        loggedUser ?
                            (<span>
                                <Link to="/">Home Page</Link>
                                <Link to="#">Welcome {loggedUser}</Link>
                                {adminBtn}
                                <Link onClick={Header.handleLogout} to="/">Logout</Link>
                            </span>)
                            :
                            (<span>
                                <Link to="/">Home Page</Link>
                                <Link to="/register">Register</Link>
                                <Link to="/login">Login</Link>
                            </span>)
                    }
                </div>
            </header>
        );
    }
}

export default Header;