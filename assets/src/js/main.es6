import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header.es6';
import Aside from './components/aside.es6';
import Register from './components/register.es6';

class App extends React.Component {
    constructor(){
        super();

        this.state = {
            popupHTML: ""
        }

        this.popupActive = false;
    }

    togglePopup(){
        this.popupActive = !this.popupActive;
        if(this.popupActive){
            this.setState({
                popupHTML:
                    <div id="popup">
                        <div id="signin-window">
                            <div id="header">
                                <button onClick={() => this.togglePopup()}> close </button>
                            </div>
                            <div id="content">
                                <Register />
                                <Register />
                            </div>
                        </div>
                    </div>
            })
        } else {
            this.setState({
                popupHTML: ""
            })
        }
    }

    render(){
        return (
            <div id="body">
                {this.state.popupHTML}
                <Header pop={() => this.togglePopup()} />
                <div id="page">
                    <Aside />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
