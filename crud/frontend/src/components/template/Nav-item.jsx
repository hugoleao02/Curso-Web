import './Nav-item.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default props =>
    <Link to={`/${props.icon}`}>
        <i className={`fa fa-${props.icon}`}> {props.title}</i>
    </Link>