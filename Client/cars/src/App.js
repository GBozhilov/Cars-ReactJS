import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './Home/Home';
import Register from './Register/Register';
import Login from './Login/Login';
import Create from './Create/Create';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Description from './Description/Description';
import Details from './Details/Details';
import Edit from './Edit/Edit';
import Delete from './Delete/Delete';
import UserDetails from './Details/UserDetails';
import Video from './Video/Video';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            email: null,
            isAdmin: false,
            cars: [],
            isFetched: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e, data, isSignUp) {
        e.preventDefault();

        const ending = isSignUp ? 'up' : 'in';
        const url = 'http://localhost:5000/auth/sign' + ending;

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        })
            .then(rawData => rawData.json())
            .then(({username, email, message, isAdmin}) => {
                if (username) {
                    this.setState({
                        username,
                        email,
                        isAdmin
                    });

                    toast.success(message, {
                        closeButton: false,
                        autoClose: 2000
                    });

                    localStorage.setItem('username', username);
                    localStorage.setItem('isAdmin', isAdmin);
                    localStorage.setItem('email', email);
                } else {
                    toast.error(message, {
                        closeButton: false,
                        autoClose: 2000
                    });
                }
            });
    }

    handleCreateSubmit(e, data) {
        e.preventDefault();

        const url = 'http://localhost:5000/feed/car/create';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        })
            .then(rawData => rawData.json())
            .then(({errors, message}) => {
                if (errors) {
                    toast.error(message, {
                        closeButton: false,
                        autoClose: 2000
                    });
                } else {
                    toast.success(message, {
                        closeButton: false,
                        autoClose: 2000
                    });
                }
            });
    }

    handleDelete(data) {
        const carId = data._id;
        const url = `http://localhost:5000/feed/car/delete/${carId}`;

        fetch(url, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        })
            .then(rawData => rawData.json())
            .then(({errors, message}) => {
                if (errors) {
                    toast.error(message, {
                        closeButton: false,
                        autoClose: 2000
                    });
                } else {
                    toast.success(message, {
                        closeButton: false,
                        autoClose: 2000
                    });

                    window.location.reload();
                }
            });
    }

    handleEdit(e, data) {
        e.preventDefault();

        const carId = data._id;
        const url = `http://localhost:5000/feed/car/edit/${carId}`;

        fetch(url, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        })
            .then(rawData => rawData.json())
            .then(({errors, message}) => {
                if (errors) {
                    toast.error(message, {
                        closeButton: false,
                        autoClose: 2000
                    });
                } else {
                    toast.success(message, {
                        closeButton: false,
                        autoClose: 2000
                    });

                    window.location.reload();
                }
            });
    }

    render() {
        const {username, email, isAdmin, cars} = this.state;

        return (
            <div className="App">
                <ToastContainer/>
                <Header username={username} isAdmin={isAdmin}/>
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={
                            () => <Home
                                cars={cars}
                                username={username}
                            />
                        }
                    />
                    <Route
                        path="/register"
                        render={
                            () => <Register
                                handleSubmit={this.handleSubmit}
                                handleChange={this.handleChange}
                            />
                        }
                    />
                    <Route
                        path="/login"
                        render={
                            () => <Login
                                handleSubmit={this.handleSubmit}
                                handleChange={this.handleChange}
                            />
                        }
                    />
                    <Route
                        path="/create"
                        render={
                            () =>
                                isAdmin ?
                                    <Create
                                        handleCreateSubmit={this.handleCreateSubmit}
                                        handleChange={this.handleChange}
                                    />
                                    :
                                    <Redirect
                                        to={{pathname: '/login'}}
                                    />
                        }
                    />
                    <Route
                        path="/video/"
                        render={
                            () => <Video cars={cars} username={username}/>
                        }
                    />
                    <Route
                        path="/description/"
                        render={
                            () => <Description cars={cars} username={username}/>
                        }
                    />
                    <Route
                        path="/details/"
                        render={
                            () =>
                                username ?
                                    <Details
                                        cars={cars}
                                        username={username}
                                        isAdmin={isAdmin}
                                    />
                                    :
                                    <Redirect
                                        to={{pathname: '/login'}}
                                    />
                        }
                    />
                    <Route
                        path="/delete/"
                        render={
                            () =>
                                isAdmin ?
                                    <Delete
                                        cars={cars}
                                        isAdmin={isAdmin}
                                        handleDelete={this.handleDelete}
                                    />
                                    :
                                    <Redirect
                                        to={{pathname: '/login'}}
                                    />
                        }
                    />
                    <Route
                        path="/user/details"
                        render={
                            () =>
                                username ?
                                    <UserDetails
                                        username={username}
                                        email={email}
                                        isAdmin={isAdmin}
                                    />
                                    :
                                    <Redirect
                                        to={{pathname: '/login'}}
                                    />
                        }
                    />
                    <Route
                        path="/edit/"
                        render={
                            () =>
                                isAdmin ?
                                    <Edit
                                        cars={cars}
                                        isAdmin={isAdmin}
                                        handleEdit={this.handleEdit}
                                        handleChange={this.handleChange}
                                    />
                                    :
                                    <Redirect
                                        to={{pathname: '/login'}}
                                    />
                        }
                    />
                    <Route render={() => <h1>Not Found</h1>}/>
                </Switch>
                <Footer/>
            </div>
        );
    }

    componentWillMount() {
        const isAdmin = localStorage.getItem('isAdmin') === 'true';
        const username = localStorage.getItem('username');
        const email = localStorage.getItem('email');

        if (username) {
            this.setState({
                username,
                email,
                isAdmin,
            });
        }

        if (!this.state.isFetched) {
            fetch('http://localhost:5000/feed/cars')
                .then((rawData) => rawData.json())
                .then(({cars, message}) => {
                    this.setState({
                        username,
                        isAdmin,
                        cars,
                        isFetched: true
                    });
                    toast.success(message, {
                        closeButton: false,
                        autoClose: 2000
                    })
                })
        }
    }
}

export default App;