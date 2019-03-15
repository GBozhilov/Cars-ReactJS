import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'

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
        const {username} = this.props;

        if (!car) {
            return <Redirect to='/'/>
        }

        return (
            <div className="Home">
                <span>
                    <h2>Description Of {car.brand} {car.model}</h2>
                    <h4>{car.description}</h4>
                </span>
                <hr/>
                <h1>All Cars</h1>
                <ul className="cars">
                    {
                        this.props.cars.map(car => (
                            <li key={car._id} className="car">
                                <h2>{car.brand} {car.model}</h2>
                                <img src={car.image} width="640px" height="360px" alt="car"/>
                                <span>
                                    <Link to={`/video/${car._id}`}><button>Video</button></Link>
                                    <button onClick={() => {
                                        this.setState({
                                            car: this.props.cars.find(c => c._id === car._id)
                                        })
                                    }}>Description
                                    </button>
                                    {
                                        username
                                            ? <Link to={`/details/${car._id}`}><button>Details</button></Link>
                                            : null
                                    }
                                    <Link to='/'><button>Back</button></Link>
                                </span>
                            </li>))
                    }
                </ul>
                <br/>
                <br/>
            </div>
        );
    }
}

export default Description;