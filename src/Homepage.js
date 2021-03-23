import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import './Homepage.css';
class Homepage extends Component {

render() {


    return (
        <div>
            <h1> This Project Provides A list of Artists </h1>
            <Link to={`/artists`}> Artist List</Link>
         
        </div>

    )
}
}

export default Homepage;