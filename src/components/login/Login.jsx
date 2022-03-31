import { Button } from '@material-ui/core';
import React from 'react';
import './login.scss';
import { auth , provider } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

const Login = () => {
    const[state , dispatch] = useStateValue();
    const signIn = () =>
    {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type:actionTypes.SET_USER,
                    user:result.user
                })
                console.log(result)

            })
            .catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="Facebook logo" />
                <img src="https://nahp.org/wp-content/uploads/2017/10/FB-Wordmark_Color.jpg" alt="" />
            </div>
            <Button onClick={signIn}>
                Login
            </Button>
        </div>
    )
}

export default Login