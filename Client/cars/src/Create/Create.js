import React, {Component} from 'react';

import './Create.css';


class Create extends Component {
    constructor(props) {
        super(props);

        this.state = {
            brand: null,
            model: null,
            year: null,
            engine: null,
            price: null,
            videoUrl: null,
            description: null,
            image: null,
        };

        this.handleChange = props.handleChange.bind(this);
    }

    render() {
        const {handleCreateSubmit} = this.props;
        const data = this.state;

        return (
            <div className="Create">
                <h1>Create Car</h1>
                <form onSubmit={(e) => handleCreateSubmit(e, data)}>
                    <label htmlFor="brand">Brand</label>
                    <input
                        type="text"
                        name="brand"
                        onChange={this.handleChange}
                        placeholder="Brand"
                    />
                    <label htmlFor="model">Model</label>
                    <input
                        type="text"
                        name="model"
                        onChange={this.handleChange}
                        placeholder="Model"
                    />
                    <label htmlFor="year">Year</label>
                    <input
                        type="number"
                        name="year"
                        onChange={this.handleChange}
                        placeholder="Year"
                    />
                    <label htmlFor="engine">Engine</label>
                    <input
                        type="text"
                        name="engine"
                        onChange={this.handleChange}
                        placeholder="Engine"
                    />
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        name="price"
                        onChange={this.handleChange}
                        placeholder="Price"
                    />
                    <label htmlFor="videoUrl">Video</label>
                    <input
                        type="text"
                        name="videoUrl"
                        onChange={this.handleChange}
                        placeholder="Video"
                    />
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        name="description"
                        onChange={this.handleChange}
                        placeholder="Description"
                    />
                    <label htmlFor="image">Image</label>
                    <input
                        type="text"
                        name="image"
                        onChange={this.handleChange}
                        placeholder="Image"
                    />
                    <input type="submit" value="Create"/>
                </form>
                <br/>
                <br/>
            </div>
        );
    }
}

export default Create;