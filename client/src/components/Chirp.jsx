import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

//Component to construct a chirp as a bootstrap card
class Chirp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <div className="row text-left my-2">
                    <div className="card w-100">
                        <div className="card-header">
                            <div className="media">
                                <img className="Avatar rounded-circle border border-dark mr-3"
                                    src="https://orig00.deviantart.net/b48b/f/2014/242/5/7/profile_picture_by_sonic_the_blue_blur-d7xal3o.jpg"
                                    alt="SANIC"
                                    style={{ height: `50px`, width: `50px` }}
                                />
                                <div className="media-body">
                                    <h5 className="d-inline font-weight-bold">{this.props.name}</h5>
                                    <h6 className="text-muted">Chirpped:</h6>
                                </div>
                            </div>
                        </div>
                        <p className="card-text p-1 m-1">{this.props.text}</p>
                        <h6 className="card-subtitle p-1 m-1 text-muted font-weight-light">- {this.props.id}</h6>
                        <Link className="btn btn-primary mt-2" to={"/chirps/" + this.props.id}>See Details</Link>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Chirp;