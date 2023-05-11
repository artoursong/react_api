import * as React from 'react';
import Button from '../../../components/Button';

const ButtonHeader = (props) => {
    return (
        <div class="flex gap-5">
            <Button name="Login"></Button>
            <Button name="Sign up"></Button>
        </div>
    );
};

export default ButtonHeader;