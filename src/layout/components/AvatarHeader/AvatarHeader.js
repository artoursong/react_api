import * as React from 'react';
import Avatar from '../../../components/Avatar';

const AvatarHeader = (props) => {
    return (
        <div class="flex items-center gap-8">
            <Avatar image="sea-1.jpg"></Avatar>
            <div class="hover:text-blue-500 cursor-pointer">
                <a class="uppercase" href={props.link}>{props.username}</a>
            </div>
        </div>
    );
};

export default AvatarHeader;