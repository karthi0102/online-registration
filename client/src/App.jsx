import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './AllRoutes';
import './App.scss';
import { getAllCourse } from './actions/course';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setCurrentUser } from './actions/currentUser';

function App() {
  const dispatch =useDispatch()
  useEffect(()=>{
    dispatch(getAllCourse())
    dispatch(setCurrentUser(localStorage.getItem('EduLearn')))
    
  },[dispatch])
  return (
    <div className="App">
      <Router>
          <AllRoutes />
      
      </Router>
    </div>
  );
}

export default App;
