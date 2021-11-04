import axios from 'axios'
import { useState, useEffect } from 'react'
import React from 'react';
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'

import { url } from '../../../components/default'
import Message from '../../include/messages'
import actions from '../actions'
import { rediredLoggedUser } from '../operations';

const Login = ({ setUser }) => {
   useEffect(() => {
       rediredLoggedUser();
   },[])

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [logged, setLogged] = useState("none");

    const handleLogin = data => {
        axios.get(url + "/sanctum/csrf-cookie").then(() => {
            axios.post(url + '/api/login', data)
                .then(res => {
                    if (res.data.jwt) {
                        setUser({
                            id: res.data.user.id,
                            name: res.data.user.name
                        });
                        window.location.href = '#/all-tasks';

                    } else {
                        setLogged("block");
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
            <form onSubmit={handleSubmit(handleLogin)}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Email"
                        placeholder="example@example.com"
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    />
                    {errors.email && errors.email.type === "required" && <Message message="Pole email jest wymagane" />}
                    {errors.email && errors.email.type === "pattern" && <Message message="To nie jest prawidłowy format adresu email" />}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Hasło</label>
                    <input
                        id="password"
                        type="password"
                        className="form-control"
                        {...register("password", { required: true, minLength: 8, maxLength: 45 })}
                    />
                    {errors.password && errors.password.type === "required" && <Message message="Pole hasło jest wymagane" />}
                    {errors.password && errors.password.type === "minLength" && <Message message="Minimalna ilość znaków wynosi 8" />}
                    {errors.password && errors.password.type === "maxLength" && <Message message="Maksymalna ilość znaków wynosi 45" />}
                </div>
                    <button 
                    className="btn btn-primary"
                    role="submit"
                    >Zaloguj się</button>
            </form>
        </div>
    );
}
const mapStateToProps = state => ({
    user: state.user
})
const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(actions.setUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);