import React from 'react';
import { connect } from 'react-redux'
import axiosConfig from '../../../config/axios';
import actions from '../actions';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useForm } from 'react-hook-form'

const addeUser = (props) => {
    const { 
        register,
        handleSubmit,
        formState: { errors } } = useForm();
    const storeUser = (data, e) => {
            axiosConfig.post('api/users/store-user', {
                name: data.name,
                email: data.email,
                password: data.password,
            }).then((res) => {
                props.add(res.data);
                toast.success('User został dodany prawiodłowo', {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                e.target.reset();

            }).catch((error) => {
                console.log(error);
            });
    }
    return(
        <form onSubmit={handleSubmit(storeUser)}>
            <div className="form-group">
                <label for="name">Imię</label>
                <input 
                    className="form-control"
                    id="name"
                    type="string" 
                    placeholder="name" {
                    ...register("name", {
                        required: true})
                        }
                />
                {errors.name && errors.name.type === "required" && <span>To pole jest wymagane</span>}
            </div>
            <div className="form-group">
                <label for="email">Email</label>
                <input
                    className="form-control" 
                    id="email"
                    type="email" 
                    placeholder="example@example.com" {
                    ...register("email", {
                    required: true, pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "To nie jest poprawny format adresu email"
                    } })} 
                />
                {errors.email && errors.email.type === "required" && <span>To pole jest wymagane</span>}
                {errors.email && <span>{errors.email.message}</span>}
            </div>
            <div className="form-group">
                <label for="password">Hasło</label>
                <input 
                    className="form-control"
                    id="password"
                    type="password" 
                    placeholder="password" {
                    ...register("password", {
                        required: true })}
                />
                {errors.password && errors.password.type === "required" && <span>To pole jest wymagane</span>}
            </div>
            <button role="input" class="btn btn-primary">Zapisz</button>
        </form>

    );
}
const mapDispatchToProps = dispatch => ({
    add: user => dispatch(actions.addUser(user))
})

export default connect(null, mapDispatchToProps)(addeUser);