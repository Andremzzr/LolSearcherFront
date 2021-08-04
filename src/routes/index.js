import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Summoner from '../pages/Summoner';
import Match from '../pages/Match';

export default function Routes() {
    return (
        <BrowserRouter> 
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/summoner/:id" component={Summoner}/>
                <Route path="/champion/:summonerId/:championName/:championId" component={Match}/>
            </Switch>
        </BrowserRouter>
    )
}