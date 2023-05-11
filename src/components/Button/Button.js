import * as React from 'react';

const Button = (props) => {
    return (
        <div>
            <button class="rounded-lg border-2 border-blue-500 py-2 px-6 cursor-pointer hover:bg-blue-500 hover:text-white">{props.name}</button>
        </div>
    );
};

export default Button;