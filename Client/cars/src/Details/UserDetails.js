import React, {Fragment} from 'react'
import {Redirect} from 'react-router-dom'

import './Details.css'


const UserDetails = (props) => {
    const {email, username, isAdmin} = props;

    if (!username) {
        return <Redirect to='/'/>
    }

    const adminOrNot = isAdmin
        ? <h1>Your Are An Admin &#9787;</h1>
        : <h1>Your Are Not An Admin &#9785;</h1>;

    return (
        <Fragment>
            <h1>{username}</h1>
            <h1>Your Email Is: {email}</h1>
            {adminOrNot}
        </Fragment>
    );
};

export default UserDetails;