import React, {Component, Fragment} from 'react'
import {Link, Redirect} from 'react-router-dom'

import './Delete.css'


class Delete extends Component {
    constructor(props) {
        super(props);

        this.id = window.location.pathname.split('/').pop();
        this.state = {
            car: this.props.cars.find(car => car._id === this.id) || null,
        }
    }


    render() {
        const {car} = this.state;
        const {isAdmin, handleDelete} = this.props;

        if (!car) {
            return <Redirect to='/'/>
        }

        const adminBtns =
            <Link to={`/delete/${car._id}`}>
                <button className="del" onClick={() => handleDelete(car)}>Del</button>
            </Link>;

        return (
            <Fragment>
                <div className="Home">
                    <h1>Are You Sure You Want To Delete The {car.brand}?</h1>
                    <span>
                    <img src={car.image} width="640px" height="360px" alt="car"/>
                    <h4>Brand: {car.brand}</h4>
                    <h4>Model: {car.model}</h4>
                    <h4>Year: {car.year}</h4>
                    <h4>Engine: {car.engine}</h4>
                    <h4>Price: {car.price} $</h4>
                </span>
                    <ul className="cars">
                        <li className="car">
                        <span>
                            {
                                isAdmin ? adminBtns : null
                            }
                            <Link to="/"><button>Back</button></Link>
                        </span>
                        </li>
                    </ul>
                </div>
                <br/>
                <br/>
            </Fragment>
        );
    }
}

export default Delete;