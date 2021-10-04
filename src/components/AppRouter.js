import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import { DataScreen } from './DataScreen';
import { App } from '../App';

export const AppRouter=()=> {
    // exact le dice a react router que se tiene que utilizar la ruta exactamente como esta escrita
    // <Route exact path="/" component={HomeScreen}/>
    return (
        <Router>
            

            <div >
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/data" component={DataScreen}/>
                    <Redirect to="/"/>
                </Switch>


            </div>
        </Router>
    );
}
