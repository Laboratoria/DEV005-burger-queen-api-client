//import React from 'react'
import logo from './assets/logo.png'
import Buttons from './components/Buttons/Buttons'

const Home = () => (
  <section className='Home'>
      
    <h2>Fast, rescued
food at your
service.</h2>
    <div>
        <img src={logo}/>
      </div>
      <Buttons
      tag="Get started"/>
  </section>
)

export default Home