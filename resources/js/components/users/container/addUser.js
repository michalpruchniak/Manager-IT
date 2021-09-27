import React from 'react';
import { connect } from 'react-redux'
import axiosConfig from '../../../config/axios';
import actions from '../actions';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const addeUser = (props) => {
    const emailInput = React.createRef();
    const passwordInput = React.createRef();
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
        <form onSubmit={storeUser}>
            <input type="string" id="email" name="email" placeholder="example@example.com" ref={emailInput} />
            <input type="password" id="password" name="password" ref={passwordInput} />
            <button role="input">Zapisz</button>
        </form>
    );
}
const mapDispatchToProps = dispatch => ({
    add: user => dispatch(actions.addUser(user))
})

export default connect(null, mapDispatchToProps)(addeUser);