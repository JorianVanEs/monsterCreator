import React from 'react';
import ReacDOM from 'react-dom';

export default class Aside extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
          <aside>
            <ul>
                <li className="header"> Monster Creator </li>
                <li> All Monsters </li>
                <li> Your Monsters </li>
                <li> New Monster </li>
            </ul>
          </aside>
        );
    }
}
