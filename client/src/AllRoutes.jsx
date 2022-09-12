import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Auth from './Pages/Auth/Auth'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'
import EditProfile from './Pages/EditProfile/EditProfile'
import Teach from './Pages/Teach/Teach'
import AddCourse from './Pages/AddCourse/AddCourse'
import CourseDetial from './Pages/CourseDetail/CourseDetail'
const AllRoutes = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<Auth />} />
    <Route path='/home' element={<Home />} />
    <Route path='/profile/public' element={<Profile />} />
    <Route path='/profile/edit' element={<EditProfile/>} />
    <Route path='/profile/teach' element={<Teach />} />
    <Route path='/addcourse' element={<AddCourse />} />
    <Route path='/course/:id' element={<AddCourse />} />
   </Routes>
   </>
  )
}

export default AllRoutes