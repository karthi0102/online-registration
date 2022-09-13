import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Logo from '../../components/Logo/Logo'
import SideBar from '../../components/SideBar/SideBar'
import {useSelector} from 'react-redux'


import './Profile.scss'

const Profile = () => {
 
  const User=useSelector((state) => (state.currentUserReducer) )
  
  return (
    <div className='profile-container'>
                <Navbar/>
                <div className="row">
                     <div className="col-3">
                      <SideBar />
                      </div>
                      <div className="col-9">
                          <Logo />
                          <div className="public-profile-details my-5">
                                <div className="profile-avator shadow">
                                     {User?.result?.name.charAt(0)}
                                </div>
                                <div className="profile-name my-3 shadow">
                                  {User?.result?.name}
                                </div>
                                <div className="profile-email my-3 shadow">
                                  {User?.result?.email}
                                </div>
                                <div className="profile-courses-enrolled my-3 shadow">
                                  COURSES ENROLLED - <span> {User.result.enrolled.length} </span>
                                </div>
                          </div>
                      </div>

                </div>
    </div>
  )
}

export default Profile