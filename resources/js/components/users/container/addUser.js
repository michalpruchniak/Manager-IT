import React from 'react';
import { connect } from 'react-redux'
import axiosConfig from '../../../config/axios';
import actions from '../actions';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useForm } from 'react-hook-form'

const addeUser = (props) => {
    const emailInput = React.createRef();
    const passwordInput = React.createRef();

    const { 
        register,
        handleSubmit,
        formState: { errors } } = useForm();
    const storeUser = (event) => {
        event.preventDefault();
            axiosConfig.post('api/users/store-user', {
                email: emailInput.current.value,
                password: passwordInput.current.value,
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

            }).catch((error) => {
                console.log(error);
            });
    }
    return(
        <form onSubmit={(event) => handleSubmit(storeUser(event))}>
            <input {...register("email", { required: true })} ref={emailInput} />
            {errors.email && <span>This field is required</span>}

            <input {...register("password", { required: true })} ref={passwordInput} />
            {errors.password && <span>This field is required</span>}

            <button role="input">Zapisz</button>
        </form>
    );
}
const mapDispatchToProps = dispatch => ({
    add: user => dispatch(actions.addUser(user))
})

export default connect(null, mapDispatchToProps)(addeUser);