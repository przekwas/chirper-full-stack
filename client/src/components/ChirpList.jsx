import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import 'isomorphic-fetch';
import AddChirp from './AddChirp';
import Chirp from './Chirp';


class ChirpList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chirps: []
        }

    }

    componentDidMount() {
        fetch('/chirps', {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' })
        }).then(response => response.json())
            .then(object => {
                let chirps = Object.keys(object).map((id) => {

                    if (object[id].text !== undefined) {
                        let text = object[id].text;
                        return <Chirp key={id} id={id} text={text} name="Luke" />
                    }
                })
                this.setState({ chirps: chirps })
            })
            .catch(error => console.log(error));

    }

    render() {
        return (
            <Fragment>
                <AddChirp />
                <div className="container">{this.state.chirps}</div>
            </Fragment>
        )
    }
}

export default ChirpList;

