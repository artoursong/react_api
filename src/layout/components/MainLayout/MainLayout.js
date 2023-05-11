// @flow 
import * as React from 'react';
import Header from '../Header';
import Hero from '../../../components/Hero';
import { Outlet } from "react-router-dom";

const MainLayout = (props) => {
    return (
        <>
            <div>
                <Header></Header>
                <Hero></Hero>
            </div>
            <Outlet/>
        </>
    );
};

export default MainLayout;