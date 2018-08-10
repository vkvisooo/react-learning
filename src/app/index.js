import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, hashHistory, Switch } from "react-router-dom";

import { Home } from './components/Home';
import { User } from './components/User';

class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Switch>
                    <Route path={"/home"} component={Home}>
                        {/* nested routers */}
                        {/* <Route path={"/home/home"} component={Home} /> */}
                        {/* router with parameter */}
                        {/* it can be accesible by /user/id link */}

                    </Route>

                    <Route path={"/user/:id"} component={User} />
                </Switch>
            </Router>

        )
    }
}
render(<App />, window.document.getElementById("app"));
