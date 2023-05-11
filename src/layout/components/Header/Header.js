// @flow 
import * as React from 'react';
import NavLink from '../../../components/NavLink';
// import AvatarHeader from '../AvatarHeader';
import ButtonHeader from '../ButtonHeader';

const Header = () => {
    return (
        <div>
            <header>
                <div>
                    <div class="flex py-8 justify-around items-center">
                        <div>
                            <div class="hover:text-blue-500">
                                <a class="text-4xl heading" href='/'>
                                    NORDIC ROSE
                                </a>
                            </div>
                        </div>
                        <nav>
                            <ul class="flex gap-x-8 items-center">
                                <NavLink tag="BLOG" link="/"></NavLink>
                                <NavLink tag="ABOUT" link="/"></NavLink>
                                <NavLink tag="LINK" link="/"></NavLink>
                                <NavLink tag="PROJECT" link="/"></NavLink>
                            </ul>
                        </nav>
                        <ButtonHeader></ButtonHeader>
                    </div>
                </div>
            </header>    
        </div>
    );
};

export default Header;