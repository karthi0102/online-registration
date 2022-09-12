import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.scss'
import Card from '../../components/Card/Card'
const Home = () => {
  return (
    <div className='home-container'>
        <Navbar />
        <div className="home-content container">

        
        <div className=" mt-5">
            <input type="search" placeholder='search' className="form-control" />
        </div>
        <div className="row  my-5">
          <div className="col-4">
          <Card />
          </div>
        </div>
        </div>
    </div>
  )
}

export default Home