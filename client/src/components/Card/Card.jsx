import React from 'react'
import {Link} from 'react-router-dom'
import './Card.scss'
const Card = () => {
  return (

        
<div className="card-container">
<div className="card shadow">
    <div className="card-body">

    <div className="img-container mb-3">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR533f2Wg9gzzXVTLxQ3P5GLNJEzqd1H6pN3Q&usqp=CAU" alt="img" />
    </div>
        <p className="card-title">The Complete 2022 Web Development Node.Js Bootcamp</p>
                    <p className="card-author">Dr.Angela Yu | Tutor</p>
                    <div className="card-rating">4.4 
                    <i className='fa fa-star' style={{color: '#f3da35'}}/>
                             <i className='fa fa-star' style={{color: '#f3da35'}} />
                             <i className='fa fa-star' style={{color: '#f3da35'}} />
                             <i className='fa fa-star' style={{color: '#f3da35'}} />
                             <i className='fa fa-star' style={{color: '#f3da35'}} />
                    </div>
                    <div className="card-price my-3">
                        Rs.3499</div>
                    <Link to='/' className='card-btn btn mb-3' >Read More</Link>
    </div>
</div>
         </div>
         
         
      )
}

export default Card