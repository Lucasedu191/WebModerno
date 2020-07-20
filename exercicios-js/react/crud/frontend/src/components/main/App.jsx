import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import Logo from '../template/Logo'
import Nav from '../template/Nav'
import Routes from '../main/Routes'
import Footer from '../template/Footer'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>