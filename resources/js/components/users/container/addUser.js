import React from 'react';
import axiosConfig from '../../../config/axios';

function createUser(){
    const emailInput = React.createRef();
    const passwordInput = React.createRef();
    const storeUser = (event) => {
        event.preventDefault();
            axiosConfig.post('api/users/store-user', {
                email: emailInput.current.value,
                password: passwordInput.current.value,
            }).then(() => {
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

export default createUser;