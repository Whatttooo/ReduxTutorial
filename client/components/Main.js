import React from 'react';
import ReactDOM from 'react-dom';
import {Link } from 'react-router';

export class Main extends React.Component{

    render(){
        return(
            <div>
                <h1>
                    <Link to='/'>Reduxtagram</Link>
                </h1>
            </div>
        )
    }
}