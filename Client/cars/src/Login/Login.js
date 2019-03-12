import React, {Component} from 'react';

import './Login.css';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            password: null
        };

        this.handleChange = props.handleChange.bind(this);
    }

    render() {
        const {handleSubmit} = this.props;
        const data = this.state;

        return (
            <div className="Login">
                <h1>Login</h1>
                <form onSubmit={(e) => handleSubmit(e, data, false)}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        onChange={this.handleChange}
                        placeholder="Username"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        placeholder="Password"
                    />
                    <input type="submit" value="Login"/>
                </form>
            </div>
        );
    }
}

export default Login;