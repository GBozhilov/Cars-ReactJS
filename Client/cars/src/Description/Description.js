import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'

class Description extends Component {
    constructor(props) {
        super(props);

        this.id = window.location.pathname.split('/').pop();
        this.state = {
            car: this.props.cars.find(m => m._id === this.id) || null
        }
    }

    render() {
        const {car} = this.state;

        return (
            <div className="Home">
                <h1>All Cars</h1>
                <span>
                    <h2>Description Of {car.brand} {car.model}</h2>
                    <p>{car.description}</p>
                </span>
                <ul className="cars">
                    {
                        this.props.cars.map(car => (
                            <li key={car._id} className="car">
                                <h2>{car.brand} {car.model}</h2>
                                <img src={car.image} width="640px" height="360px" alt="car"/>
                                <span>
                            <Fragment>
                                <button><Link to={`/video/${car._id}`}>View Video</Link></button>
                                <button onClick={() => {
                                    this.setState({
                                        car: this.props.cars.find(car => car._id === car._id)
                                    })
                                }}>View Description</button>
                                 <button><Link to={`/details/${car._id}`}>View Details</Link></button>
                            </Fragment>
                            </span>
                            </li>))
                    }
                </ul>
            </div>
        );
    }
}

export default Description;