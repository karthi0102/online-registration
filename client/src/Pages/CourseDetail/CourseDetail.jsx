import React from 'react'
import './CourseDetail.scss'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {
  const courses = useSelector((state) => (state.courseReducer))
  const {id} = useParams()
  return (
    <div className="course-detail-container">
          
    </div>
  )
}

export default CourseDetail