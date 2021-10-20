import React from 'react';
import { connect } from 'react-redux'
import actions from '../actions';
import { useForm } from 'react-hook-form'

import { storeUser } from '../operations';

const addeUser = (props) => {
    const { 
        register,
        handleSubmit,
        formState: { errors } } = useForm();

    const submitAddUserForm = (data, e) => {
        storeUser(props, data, e);

    }
    return(
        <form onSubmit={handleSubmit(submitAddUserForm)}>
            <div className="form-group">
                <label htmlFor="name">Imię</label>
                <input 
                    className="form-control"
                    id="name"
                    type="string" 
                    placeholder="name" {
                    ...register("name", {
                        required: true,
                        minLength: 3,
                        maxLength: 30
                    })
                        }
                />
                {errors.name && errors.name.type === "required" && <span>To pole jest wymagane</span>}
                {errors.name && errors.name.type === "minLength" && <span>To pole musi mieć przynajmniej 3 znaki</span>}
                {errors.name && errors.name.type === "maxLength" && <span>To pole może mieć maksymalnie 30 znaków</span>}
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    className="form-control" 
                    id="email"
                    type="email" 
                    placeholder="example@example.com" {
                    ...register("email", {
                    required: true,
                    pattern: {
                        value: /\S+@\S+\.\S+/
                    } })} 
                />
                {errors.email && errors.email.type === "required" && <span>To pole jest wymagane</span>}
                {errors.email && <span>To nie jest poprawny format adresu email</span>}
            </div>
            <div className="form-group">
                <label htmlFor="password">Hasło</label>
                <input 
                    className="form-control"
                    id="password"
                    type="password" 
                    placeholder="password" {
                    ...register("password", {
                        required: true,
                        minLength: 8,
                        maxLength: 50,
                    })}
                />
                {errors.password && errors.password.type === "required" && <span>To pole jest wymagane</span>}
            </div>
            <button role="input" className="btn btn-primary">Zapisz</button>
        </form>

    );
}
const mapDispatchToProps = dispatch => ({
    add: user => dispatch(actions.addUser(user))
})

export default connect(null, mapDispatchToProps)(addeUser);