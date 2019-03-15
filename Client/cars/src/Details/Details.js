import React, {Component, Fragment} from 'react'
import ReactPlayer from 'react-player';
import {Link, Redirect} from 'react-router-dom'

import './Details.css'


class Details extends Component {
    constructor(props) {
        super(props);

        this.id = window.location.pathname.split('/').pop();
        this.state = {
            car: this.props.cars.find(car => car._id === this.id) || null,
            // clicked: false
        }
    }


    render() {
        const {car} = this.state;
        const {isAdmin} = this.props;

        if (!car) {
            return <Redirect to='/'/>
        }

        const adminBtns =
            <Fragment>
                <Link to={`/edit/${car._id}`}><button>Edit</button></Link>
                <Link to={`/delete/${car._id}`}><button className="del">Del</button></Link>
            </Fragment>;

        return (
         <Fragment>
            <div className="Home">
                <h1>Details</h1>
                <span>
                    <h2>Details Of {car.brand} {car.model}</h2>
                    <div className="video">
                        <div className="small">
                            <ReactPlayer url={car.videoUrl}/>
                        </div>
                    </div>
                    <img src={car.image} width="640px" height="360px" alt="car"/>
                    <h4>Brand: {car.brand}</h4>
                    <h4>Model: {car.model}</h4>
                    <h4>Year: {car.year}</h4>
                    <h4>Engine: {car.engine}</h4>
                    <h4>Price: {car.price} $</h4>
                    <h4>{car.description}</h4>
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
                {/*<ul className="cars">*/}
                    {/*{*/}
                        {/*cars.map(car => (*/}
                            {/*<li key={car._id} className="car">*/}
                                {/*<h2>{car.brand} {car.model}</h2>*/}
                                {/*<img src={car.image} width="640px" height="360px" alt="car"/>*/}
                                {/*<span>*/}
                                    {/*<Link to={`/video/${car._id}`}>*/}
                                        {/*<button onClick={() => {*/}
                                            {/*this.setState({*/}
                                                {/*car: cars.find(c => c._id === car._id)*/}
                                            {/*})*/}
                                        {/*}}>*/}
                                            {/*Video*/}
                                        {/*</button>*/}
                                    {/*</Link>*/}
                                    {/*<Link to={`/description/${car._id}`}><button>Description</button></Link>*/}
                                    {/*{*/}
                                        {/*username*/}
                                            {/*? <Link to={`/details/${car._id}`}><button>Details</button></Link>*/}
                                            {/*: null*/}
                                    {/*}*/}
                                    {/*<Link to="/"><button>Back</button></Link>*/}
                                {/*</span>*/}
                            {/*</li>))*/}
                    {/*}*/}
                {/*</ul>*/}
            </div>
             <br/>
             <br/>
         </Fragment>
        );
    }
}

export default Details;