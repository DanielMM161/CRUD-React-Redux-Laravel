import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => (
    <nav id="menu">
        <Link to="/">
            Clientes
        </Link>
        <Link to="/editar">
            Editar Clientes
        </Link>
    </nav>
)
export default Menu;