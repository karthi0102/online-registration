import React from 'react'
import { useEffect } from 'react'
import Card from '../../components/Card/Card'
import { useSelector,useDispatch } from 'react-redux'
import Navbar from '../../components/Navbar/Navbar'
import Spinner from '../../components/Spinner/Spinner'

const MyCourses = () => {
  
    const myCourse = useSelector((state) => (state.enrolledReducer))
    
    

  return (
    <div className="my-course-details-container">
      <Navbar />
          {myCourse.data==null ? <Spinner  />:
          <div className="container my-5">
      <div className="row d-flex justify-content-center">
        {myCourse.data.enrolled.map(course => (
         <div className="col-4" key={course._id}>
          <Card course={course} />
         </div>
        ))}
        </div>
      </div>

}

    </div>
  )
}

export default MyCourses
