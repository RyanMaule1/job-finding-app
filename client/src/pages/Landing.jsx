import React from 'react'
import Wrapper from "../assets/wrappers/LandingPage"
import { Logo } from '../components'
import main from "../assets/images/main.svg"
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
          <div className='info'>
            <h1>
              Job <span>Tracking</span> App
            </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Pariatur, sapiente dolorem, dolorum, eius iste illum est 
              distinctio quia incidunt recusandae tempora aliquam quibusdam 
              doloremque mollitia soluta repudiandae iure accusantium minima?
            </p>
            <Link to="/register" className='btn register-link'>Register</Link>
            <Link to="/login" className='btn'>Login</Link>
          </div>
        <img src={main} alt='main image' className='main main-img'></img>
      </div>
    </Wrapper>
  )
}

export default Landing