import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Profile from '../components/Profile';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>    
                <Route exact path='/profile' component={Profile} />    
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;