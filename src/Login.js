import React, { useContext, useRef } from 'react';
import { MyUserContext } from './App';

const Login = () => {
    const username = useRef();
    const currentUser = useContext(MyUserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        currentUser.loginFn(username.current.value)
    }

    return (
        <div>
            {
            currentUser.username === null 
            ? (
                <form onSubmit={handleSubmit}>
                <input type="text" ref={username}/>
                <input type="submit" value="Login"/>
            </form>
            )
            : <button onClick={currentUser.logoutFn}>Logout</button>
}
        </div>
    )
}

export default Login;