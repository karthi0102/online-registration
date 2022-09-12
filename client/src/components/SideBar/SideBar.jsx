import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setCurrentUser } from '../../actions/currentUser'
import './SideBar.scss'
const SideBar = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleLogout = () =>{
    dispatch({type:"LOGOUT"});
    localStorage.removeItem('EduLearn')
    dispatch(setCurrentUser(null))
    navigate('/')

  }
  return (
   <nav className='profile-sidebar'>
    <NavLink to='/profile/public' className='side-nav-bar' activeclassname='active' >Public Profile</NavLink>
    <NavLink to='/profile/edit' className='side-nav-bar' activeclassname='active'>Edit Profile</NavLink>
    <NavLink to='/profile/teach' className='side-nav-bar' activeclassname='active'>Teach on Edulearn</NavLink>
    <p className='side-nav-bar' onClick={handleLogout}>Logout</p>
   </nav>
  )
}

export default SideBar