import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import App from '../App/App';

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/categories/:id?" component={App} exact />
            <Route path="/tasks/:id/edit" component={App} exact />
            <Redirect to="/categories" />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;