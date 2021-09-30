import axios from 'axios'
import { useState, useEffect } from 'react'
import React from 'react';
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'

import { url } from '../../../components/default'
import Message from '../../include/messages'
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import actions from '../actions'

const Register = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [logged, setLogged] = useState("none")
    useEffect(() => {
            // <Router>
            //     <Redirect to="/all-tasks" />
            // </Router>
        
    })
    const onSubmit = data => {
        axios.get(url + "/sanctum/csrf-cookie").then(() => {
            axios.post(url + '/api/login', data)
                .then(res => {
                    console.log(res);
                    if (res.data.jwt) {
                        props.setUser(res.data.user);
                        window.location.href = '#/all-tasks';
                        window.localStorage.setItem('login', res.data.user.id);

                    }

                })
                .catch(error => {
                    if (error.response.status == 401) {
                        setLogged("block");
                    }
                })
        })
    }
    return (
        <div className="container">
            <h2>Zaloguj się</h2>
            <Message message="Podany użytkownik nie istnieje, albo hasło jest nieprawidłowe" display={logged} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input_row">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        placeholder="Email"
                        placeholder="example@example.com"
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    />
                    {errors.email && errors.email.type === "required" && <Message message="Pole email jest wymagane" />}
                    {errors.email && errors.email.type === "pattern" && <Message message="To nie jest prawidłowy format adresu email" />}
                </div>
                <div className="input_row">
                    <label htmlFor="password">Hasło</label>
                    <input
                        id="password"
                        type="password"
                        {...register("password", { required: true, minLength: 8, maxLength: 45 })}
                    />
                    {errors.password && errors.password.type === "required" && <Message message="Pole hasło jest wymagane" />}
                    {errors.password && errors.password.type === "minLength" && <Message message="Minimalna ilość znaków wynosi 8" />}
                    {errors.password && errors.password.type === "maxLength" && <Message message="Maksymalna ilość znaków wynosi 45" />}
                </div>
                <div className="input_row">
                    <button role="submit">Zaloguj się</button>
                </div>
            </form>
        </div>
    );
}
const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(actions.setUser(user))
})
export default connect(null, mapDispatchToProps)(Register);