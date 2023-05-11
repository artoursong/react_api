import * as React from 'react';
import LoginImage from '../LoginImage';
import LoginForm from '../LoginForm';

const Login = (props) => {
    return (
        <div>
            <div>
                <LoginImage link="/"></LoginImage>
                <LoginForm></LoginForm>
            </div>
        </div>
    );
};

export default Login;