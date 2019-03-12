import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

import './Home.css'

class Home extends Component {
    render() {
        let {username, cars} = this.props;

        cars = cars.map(car =>
            (<li className="car" key={car._id}>
                <h2>{car.brand} {car.model}</h2>
                <img src={car.image} alt="car"/>
                <span>
                    <Fragment>
                        <Link to={`/video/${car._id}`}><button>Video</button></Link>
                        <Link to={`/description/${car._id}`}><button>Description</button></Link>
                        {
                            username
                                ? <Link to={`/details/${car._id}`}><button>Details</button></Link>
                                : null
                        }
                    </Fragment>
                </span>
            </li>)
        );

        return (
            <div className="Home">
                <h1>All Cars</h1>
                <ul className="cars">
                    {cars}
                </ul>
            </div>
        );
    }
}

export default Home;