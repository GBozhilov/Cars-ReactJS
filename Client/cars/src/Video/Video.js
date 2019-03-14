import React, {Component} from 'react'
import ReactPlayer from 'react-player';
import {Link, Redirect} from 'react-router-dom'

import './Video.css'


class Video extends Component {
    constructor(props) {
        super(props);

        this.id = window.location.pathname.split('/').pop();
        this.state = {
            car: this.props.cars.find(car => car._id === this.id) || null,
            clicked: false
        }
    }


    render() {
        const {car} = this.state;
        const {cars, username} = this.props;

        if (!car) {
            return <Redirect to='/'/>
        }

        return (
            <div className="Home">
                <h1>All Cars</h1>
                <span>
                    <h2>Video Of {car.brand} {car.model}</h2>
                    <div className="video">
                        <div className="small">
                            <ReactPlayer url={car.videoUrl}/>
                        </div>
                    </div>
                </span>

                <ul className="cars">
                    {
                        cars.map(car => (
                            <li key={car._id} className="car">
                                <h2>{car.brand} {car.model}</h2>
                                <img src={car.image} width="640px" height="360px" alt="car"/>
                                <span>
                                    <Link to={`/video/${car._id}`}>
                                        <button onClick={() => {
                                            this.setState({
                                                car: cars.find(c => c._id === car._id)
                                            })
                                        }}>
                                            Video
                                        </button>
                                    </Link>
                                    <Link to={`/description/${car._id}`}><button>Description</button></Link>
                                    {
                                        username
                                            ? <Link to={`/details/${car._id}`}><button>Details</button></Link>
                                            : null
                                    }
                                    <Link to="/"><button>Back</button></Link>
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

export default Video;