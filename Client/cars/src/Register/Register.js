import React, {Component} from 'react';

import './Register.css';


class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            email: null,
            password: null
        };

        this.handleChange = props.handleChange.bind(this);
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <div className="Register">
                <h1>Register</h1>
                <form onSubmit={(e) => handleSubmit(e, this.state, true)}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        onChange={this.handleChange}
                        placeholder="Username"
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        onChange={this.handleChange}
                        placeholder="Email"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        placeholder="Password"

                    />
                    <input type="submit" value="Register"/>
                </form>
            </div>
        );
    }
}

export default Register;