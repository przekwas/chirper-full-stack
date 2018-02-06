import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AddChirp from './AddChirp';
import ChirpList from './ChirpList';
import SingleChirp from './SingleChirp';
import EditChirp from './EditChirp';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={ChirpList} />
                        <Route exact path="/chirps/:id" component={SingleChirp} />
                        <Route path="/chirps/:id/edit" component={EditChirp} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;