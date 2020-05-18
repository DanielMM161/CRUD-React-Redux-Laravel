import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Clients from './Clients';
import ShowClient from './Clients/ShowClient';
import Update from './CRUD/Update';
import Add from './CRUD/Add';
import Menu from './Menu';
import '../../css/index.css';

function App() {
    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <React.Fragment>
                    <div className="margen">
                        <Route exact path="/" component={Clients}/>
                        <Route exact path="/clients" component={Clients}/>
                        <Route exact path="/client/:id" component={ShowClient}/>
                        <Route exact path="/update/:id" component={Update}/>
                        <Route exact path="/add" component={Add}/>
                    </div>
                </React.Fragment>
            </Switch>
        </BrowserRouter>
    );
}

export default App;


