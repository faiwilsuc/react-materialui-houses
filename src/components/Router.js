import React from 'react';
import { BrowserRouter,Route, Switch, Redirect } from 'react-router-dom';
import HouseList from './HouseList';
import AddHouse from './AddHouse';
import Detail from './Detail';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={HouseList} />
                <Route path='/add' exact component={AddHouse} />
                <Route path='/detail/:id' exact component={Detail} />
            </Switch>
        </BrowserRouter>
    );
}