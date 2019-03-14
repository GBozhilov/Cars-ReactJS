import React, {Component} from 'react';

import './Edit.css';
import {Redirect} from 'react-router-dom';


class Edit extends Component {
    constructor(props) {
        super(props);

        this.id = window.location.pathname.split('/').pop();
        const car = this.props.cars.find(car => car._id === this.id) || null;

        this.state = {
            car,
            brand: car.brand,
            model: car.model,
            year: car.year,
            engine: car.engine,
            price: car.price,
            videoUrl: car.videoUrl,
            description: car.description,
            image: car.image,
        };

        this.handleChange = props.handleChange.bind(this);
    }

    render() {
        const {handleEdit} = this.props;
        const data = this.state.car;
        const {car} = this.state;

        if (!car) {
            return <Redirect to='/'/>
        }

        const {
            brand,
            model,
            year,
            engine,
            price,
            videoUrl,
            description,
            image
        } = this.state;

        return (
            <div className="Edit">
                <h1>Edit {car.brand} {car.model}</h1>
                <form onSubmit={(e) => handleEdit(e, data)}>
                    <label htmlFor="brand">Brand</label>
                    <input
                        type="text"
                        name="brand"
                        onChange={this.handleChange}
                        value={brand}
                    />
                    <label htmlFor="model">Model</label>
                    <input
                        type="text"
                        name="model"
                        onChange={this.handleChange}
                        value={model}
                    />
                    <label htmlFor="year">Year</label>
                    <input
                        type="number"
                        name="year"
                        onChange={this.handleChange}
                        value={year}
                    />
                    <label htmlFor="engine">Engine</label>
                    <input
                        type="text"
                        name="engine"
                        onChange={this.handleChange}
                        value={engine}
                    />
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        name="price"
                        onChange={this.handleChange}
                        value={price}
                    />
                    <label htmlFor="videoUrl">Video</label>
                    <input
                        type="text"
                        name="videoUrl"
                        onChange={this.handleChange}
                        value={videoUrl}
                    />
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        name="description"
                        onChange={this.handleChange}
                        value={description}
                    />
                    <label htmlFor="image">Image</label>
                    <input
                        type="text"
                        name="image"
                        onChange={this.handleChange}
                        value={image}
                    />
                    <input type="submit" value="Edit"/>
                </form>
                <br/>
                <br/>
            </div>
        );
    }
}

export default Edit;