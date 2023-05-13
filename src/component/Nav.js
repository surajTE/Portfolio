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
                    <li><Link to='/' className='active'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/project'>Project</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav