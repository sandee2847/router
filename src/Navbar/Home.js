import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Home() {
    return (
        <>
            <h1 style={{ color: 'green' }}>Home Page...</h1>
            <NavLink to='/about'>go to about page</NavLink>
        </>
    )
}
