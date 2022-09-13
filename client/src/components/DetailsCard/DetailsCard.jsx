import React from 'react'
import './DetailsCard.scss'
import Spinner from '../Spinner/Spinner'
import { useState } from 'react'
const DetailsCard = ({course}) => {

  return (
    <>
     {course ==null ? <Spinner /> :
     <div className="details-card-container container mt-5">
        <div className="row first-container shadow">
            <div className="col-4">
              <div className="img-container">
                <img src={course.img} alt="" />
            </div>
            </div>
            <div className="col-6">
                <div className="course-details">
                      <p className="course-name">{course.name}</p>
                      <p className='course-author'>Author - {course.createdBy.name}</p>
                      <p className='course-description'>{course.desc}</p>
                      <p className="course-amount">₹{course.cost}</p>
                      <p className="course-duration">Duration : {course.duration}hours</p>
                      <p className='course-enroll-button'>ENROLL NOW</p>
                </div>
            </div>
            </div>
            <div className="row my-3">
              <div className="col-12">
                  <h2 className='text-center'>VIDEOS</h2>
                  <div className="videos-container row my-5">

                  {course.videos.map((m,idx) => (
                    <div className="video-details col-4" key={idx} >
                        <p className='video-title text-center'>{idx+1}.{m.title}</p>
                            <div className="you-tube-container">
                              <iframe className='video'
                                      title='Youtube player'
                                      sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                                      src={`https://youtube.com/embed/${m.link.slice(-11)}?autoplay=0`} >
                              </iframe>
                              </div>
                          </div>

                    
                  ))}
                  </div>
              </div>
            </div>
            </div>
}
    </>    
  
    
  )
}

export default DetailsCard





