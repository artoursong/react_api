// @flow 
import * as React from 'react';

 const NavLink = (props) => {
    return (
        <li class="">
            <div class="hover:border-b-2 hover:border-b-blue-500 hover:pb-2 hover:text-blue-500 cursor-pointer">
                <a href={props.link}>{props.tag}</a>
            </div>
        </li>
    );
};export default NavLink