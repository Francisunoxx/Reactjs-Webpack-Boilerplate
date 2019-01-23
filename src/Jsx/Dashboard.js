import React, { Component } from 'react';
import style from '../Css/Dashboard.css';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

export default class Dashboard extends Component {
    render() {
        return (
            <div className={style.div}>
                <Link to="/home"><h3>HOME</h3></Link>
                <Link to="/about"><h3>ABOUT</h3></Link>
            </div>
        )
    }
}