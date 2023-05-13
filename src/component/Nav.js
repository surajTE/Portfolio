import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    const [bar, setBar] = useState(false)

    const changeColor = () => {
        if (window.scrollY > 60) {
            setBar(true)
        } else {
            setBar(false)
        }
    }

    window.addEventListener('scroll', changeColor, true)

    return (
        <div>
            <nav className={bar ? 'navbarshadow' : 'navbar'}>
                <h4 className='m-0'>Suraj</h4>
                <ul className='d-flex'>
                    <li><a herf='#Home'>Home</a></li>
                    <li><a herf='#About'>About</a></li>
                    <li><a herf='#Project'>Project</a></li>
                    <li><a herf='#Contact'>Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav