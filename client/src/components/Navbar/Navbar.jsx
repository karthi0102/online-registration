import React,{useEffect} from 'react'

import { useSelector,useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setCurrentUser } from '../../actions/currentUser'
import './Navbar.scss'
const Navbar = () => {
  const dispatch=useDispatch();
  
  useEffect(()=>{
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("EduLearn"))))
  },[dispatch])

  
  return (
    <nav className="navbar navbar-expand-md bg-light">
    <div className="container-lg">
      <a className="navbar-brand" href="#"><i className="fa-solid fa-graduation-cap" />  EDULEARN</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        </ul>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <NavLink to='/home' className="nav-link" activeclassname='active'>HOME</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/courses' className='nav-link' activeclassname='active' >MY COURSES</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/addcourse' className="nav-link" activeclassname='active'>ADD COURSE</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/profile/public' className='nav-link' activeclassname='active' >PROFILE</NavLink>
            </li>
           
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar