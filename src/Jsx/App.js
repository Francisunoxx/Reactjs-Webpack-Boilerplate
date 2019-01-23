import React, { Component } from "react";
import Dashboard from '../Jsx/Dashboard'
import Home  from '../Jsx/Home';
import About from '../Jsx/About';
import { BrowserRouter, Route, Switch, IndexRoute, browserHistory } from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={About}/>
                </Switch>
            </BrowserRouter>
        )
    }
}