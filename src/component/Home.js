import React from 'react'
import Homelogo from '../MERN.png'
import bImage from '../wave.svg'
import Skill from './Skill'

const Home = () => {
    return (
        <div>
            <div className='d-flex justify-content-evenly align-items-center border' style={{ height: '85vh',  }}>
                <div className="row m-0 d-flex align-items-cen">
                    <div className="col-md-7 ps-5 pt-4">
                        <div className='d-flex'>
                            <h4 className='me-2 wave' style={{ display: 'inline' }}>&#128075;</h4>
                            <h4>I'm Suraj Eyannam</h4>
                        </div>
                        <h1 style={{ fontSize: '4.5rem', fontWeight: '700' }} className='type'>Front-End Developer</h1>
                        <h5 className='m-0 '>I am always looking for opportunities to take on new challenges and push the boundaries of what is possible with web development.</h5>
                    </div>
                    <div className="col-md-4 ms-4 p-0">
                        <img src={Homelogo} alt="" className='w-100' />
                    </div>
                </div>
            </div>

            {/* Skill */}
            <Skill/>


            {/* <img src={bImage} alt="" className='' /> */}
        </div>
    )
}

export default Home
