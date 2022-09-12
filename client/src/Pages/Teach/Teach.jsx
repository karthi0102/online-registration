import React,{useEffect} from 'react'
import './Teach.scss'
import SideBar from '../../components/SideBar/SideBar'
import Navbar from '../../components/Navbar/Navbar'
import Logo from '../../components/Logo/Logo'
import { useSelector,useDispatch } from 'react-redux'

const Teach = () => {
   
  const User=useSelector((state) => (state.currentUserReducer) )
  
  return (
    <div className="teach-container">
        <Navbar />
        <div className="row">
            <div className="col-3">
                <SideBar />
            </div>
            <div className="col-9">
              <Logo />
              <div className="teach-form-container">
                <div className="card shadow">
                  <div className="card-body">
                      <form>
                         <div className="form-group mb-3">
                          <label  className="form-label">Name</label>
                          <input type="tel" className="form-control" value={User?.result?.name} readOnly />
                        </div>
                        <div className="form-group mb-3">
                          <label  className="form-label">Phone Number</label>
                          <input type="tel" className="form-control" />
                        </div>
                        <div className="form-group mb-3">
                          <label className="form-label">Skills</label>
                          <input type="text" placeholder="Ex: html,css" className="form-control" />
                        </div>
                        <div className="form-group mb-3">
                          <label  className="form-label">Experience</label>
                          <input type="text" placeholder='Ex:Proffesor at XYX university' className="form-control" />
                        </div>
                        <div className="form-group mb-3">
                          <label className="form-label">Languages Known</label>
                          <input type="text" placeholder="Ex:English,Tamil" className="form-control" />
                        </div>
                        <div className="d-grid gap-8">
                          <button className="btn">Become a Mentor</button>
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

export default Teach