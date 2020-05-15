import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Clientes from './Clientes';
import Editar from './Editar';
import Menu from './Menu';
import '../../css/index.css';

function App() {
    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <React.Fragment>
                    <div className="margen">
                        <Route exact path="/" component={Clientes}/>
                        <Route exact path="/clientes" component={Clientes}/>
                        <Route exact path="/editar/:id" component={Editar}/>
                    </div>
                </React.Fragment>
            </Switch>
        </BrowserRouter>
    );
}

export default App;


