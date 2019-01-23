import React, { Component } from 'react';

export default class Register extends Component {
    constructor(){
        super();

        this.email = '';
        this.username = '';
        this.password = '';
        this.confirmedPassword = ""

        this.emailValid = false;
        this.usernameValid = false;
        this.passwordValid = false;

        this.state = {
            errors: ""
        }
    }

    checkDetails(){
        let errorArray = [];
        fetch("https://jorianvan.es/dungeonmuster/assets/src/api/registered_users.php")
            .then(res => res.json())
            .then(res => {
                if(this.email !== ''){
                    if(this.email.includes("@") && this.email.includes(".")){
                        res.forEach(item => {
                            if(item.user_email != this.email){
                                this.emailValid = true;
                            } else {
                                this.emailValid = false;
                                errorArray.push("This email already exists!");
                            }
                        })
                    } else {
                        errorArray.push("Fill in a valid email address!");
                    }
                } else {
                    errorArray.push("Enter an email adress!");
                }

                if(this.username !== ''){
                    res.forEach(item => {
                        if(item.user_name != this.username){
                            this.usernameValid = true;
                        } else {
                            this.usernameValid = false;
                        }
                    })
                } else {
                    errorArray.push("Enter an username!");
                }

                if(this.password !== ''){
                    if(this.hasUpperCase(this.password) && this.hasNumber(this.password) && this.hasSpecialCharacters(this.password)){
                        if(this.password === this.confirmedPassword){
                            this.passwordValid = true;
                        } else {
                            this.passwordValid = false;
                            errorArray.push("The passwords do not match!");
                        }
                    } else {
                        errorArray.push("Your password does not include a capital letter, number or symbol!");
                    }
                } else {
                    errorArray.push("Enter a password!");
                }

                if(this.emailValid && this.usernameValid && this.passwordValid){
                    this.registerUser();
                    this.setState({
                        errors: ""

                    })
                } else {
                    this.setState({
                        errors:
                            <ul id="error-box">
                                {errorArray.map(item => {
                                    return <li key={Math.random() * 100 + "key"}> {item} </li>
                                })}
                            </ul>

                    })
                    document.querySelector("#confirmedPassword").value = "";
                }
            })
    }

    hasUpperCase(string){
        let character='';
        for (let i = 0; i < string.length; i++){
            character = string.charAt(i);
            if (character === character.toUpperCase()) {
                return true;
            }
        }
    }

    hasNumber(string){
        return /\d/.test(string);
    }

    hasSpecialCharacters(string){
        if(/^[a-zA-Z0-9- ,_]*$/.test(string) === false){
            return true;
        }
    }

    registerUser(){
        const url = new URL('https://jorianvan.es/dungeonmuster/assets/src/api/register_user.php');
        const params = {
            email: "1",
            name: "2",
            password: "3"
        }
        url.search = new URLSearchParams(params);

        fetch(url)
            .then(res => console.log(res));
    }

    render() {
        return (
            <div id="register-window">
                <h2> Register </h2>
                <label> Email Address </label>
                <input type="text" onChange={event => {this.email = event.target.value}} />
                <label> Username </label>
                <input type="text" onChange={event => {this.username = event.target.value}} />
                <label> Password </label>
                <input type="password" onChange={event => {this.password = event.target.value}} />
                <label> Confirm Password </label>
                <input type="password" id="confirmedPassword" onChange={event => {this.confirmedPassword = event.target.value}} />
                {this.state.errors}
                <button onClick={() => {this.checkDetails()}}>Register</button>
            </div>
        );
    }
}
