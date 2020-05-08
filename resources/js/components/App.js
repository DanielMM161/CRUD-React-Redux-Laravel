import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Clientes from './Clientes'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Clientes}/>
                <Route exact path="/clientes" component={Clientes}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;


