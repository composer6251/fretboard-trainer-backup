import React from 'react';
import {withRouter} from 'react-router-dom';

import './homepage-link.styles.scss';


const Homepage = (props) => (

    <div id='homepage-component' 
       
    >
        <div>
            <h2 id='sign-out'
                onClick={() =>
                props.history.push('/')}
            >
                Sign Out
            </h2>
        </div >
        <div>
            <h2 id='homepage-link' 
                onClick={() =>
                props.history.push('/homepage')}
            >
            Home</h2>
        </div>
    </div>
    

);

export default withRouter(Homepage);