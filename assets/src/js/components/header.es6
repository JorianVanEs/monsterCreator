import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <header>
                <button onClick={() => this.props.pop()}> Login </button>
            </header>
        );
    }
}
