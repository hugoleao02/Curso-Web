import './Nav.css';
import React from 'react';
import NavItem from './Nav-item';

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            
            <NavItem icon="home" title="Início"/>
            <NavItem icon="users" title="Usuários"/>
            
        </nav>
    </aside>