import { BrowserRouter, Routes, Route, NavLink, } from "react-router-dom";
import React from 'react'
import Home from './Navbar/Home';
import About from './Navbar/About';
import Contact from './Navbar/Contact';
export default function Header() {
    return (
        <BrowserRouter>
            <div style={{
                display: 'flex',
                background: 'black',
                padding: '10px',
                fontSize: '22px'

            }}>
                <div style={{ margin: '10px' }}>
                    <NavLink to="/" style={({ isActive }) => ({
                        color: 'isActive' ? 'greenyellow' : 'white'
                    })}>
                        Home
                    </NavLink>
                </div>
                <div style={{ margin: '10px' }}>
                    <NavLink to='/about' style={({ isActive }) =>
                    ({
                        color: 'isActive' ? 'greenyellow' : 'white'
                    })}>
                        About
                    </NavLink>
                </div>
                <div style={{ margin: '10px' }}>
                    <NavLink to='/contact' style={({ isActive }) => ({
                        color: 'isActive' ? 'yellowgreen' : 'white'
                    })}>
                        Contact
                    </NavLink>
                </div>
            </div>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/home' element={<Home />} />
                <Route exact path='about' element={<About />} />
                <Route exact path='contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}
