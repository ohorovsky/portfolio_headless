import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/(home|index\.html)?/" component={App} />
            <Route exact path="/projects" component={App} />
            <Route exact path="/photography" component={App} />
            <Route exact path="/contact" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router;