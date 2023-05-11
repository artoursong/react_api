import * as React from 'react';

const Avatar = (props) => {
    return (
        <div>
            <div class="cursor-pointer">
                <img class="rounded-full w-[40px] h-[40px]" src={props.image} alt="avatar"></img>
            </div>
        </div>
    );
};

export default Avatar;