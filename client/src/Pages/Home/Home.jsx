import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.scss'
import Card from '../../components/Card/Card'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
const Home = () => {
  const courses =  useSelector((state) => (state.courseReducer))
  
  return (
    <>

    {
      courses.data === null ? <h2>Loading</h2> :
    
    <div className='home-container'>
        <Navbar />
        <div className="home-content container">
        <div className=" mt-5">
            <input type="search" placeholder='search' className="form-control" />
        </div>
        <div className="row  my-5">
          <div className="col-4">
          {courses?.data.map(course => (
            <Card course={course} key={course._id} />
          ))}
          </div>
        </div>
        </div>
    </div>
  
 
    }
     </>
  )
}

export default Home