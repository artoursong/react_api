import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainLayout from './layout/components/MainLayout';
import Home from './home/components';
import Login from './login/components/Login';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='/' element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="login" element={<Login />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
