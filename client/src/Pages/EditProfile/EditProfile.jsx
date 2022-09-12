import React from 'react'
import './EditProfile.scss'
import Navbar from '../../components/Navbar/Navbar'
import SideBar from '../../components/SideBar/SideBar'
import Logo from '../../components/Logo/Logo'
import { useSelector } from 'react-redux'
const EditProfile = () => {
  const User = useSelector((state)=>(state.currentUserReducer))
  return (
      <div className="edit-profile-container">
        <Navbar />
        <div className="row">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9">
                <Logo />
                <div className="edit-form-container">
                <div className="card shadow">
                  <div className="card-body">
                      <form>
                         <div className="form-group mb-3">
                          <label  className="form-label">Name</label>
                          <input type="tel" className="form-control" value={User?.result?.name}  />
                        </div>
                        <div className="form-group mb-3">
                          <label  className="form-label">Email</label>
                          <input type="email" className="form-control" value={User?.result?.email}/>
                        </div>
  
                        <div className="form-group mb-3">
                          <label  className="form-label">Phone Number</label>
                          <input type="tel" className="form-control"  />
                        </div>
                        <div className="form-group mb-3">
                          <label className="form-label">Skills</label>
                          <input type="text" placeholder="Ex: html,css" className="form-control" />
                        </div>
                        
                        <div className="form-group mb-3">
                          <label className="form-label">Languages Known</label>
                          <input type="text" placeholder="Ex:English,Tamil" className="form-control" />
                        </div>
                        <div className="d-grid gap-8">
                          <button className="btn">Update Profile</button>
                        </div>
                      </form>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
  )
}

export default EditProfile