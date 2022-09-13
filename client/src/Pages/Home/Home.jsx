import React,{ useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Navbar from '../../components/Navbar/Navbar'
import Card from '../../components/Card/Card'
import Spinner from '../../components/Spinner/Spinner'

import './Home.scss'
import { useEffect } from 'react'


const Home = () => {
  const courses =  useSelector((state) => (state.courseReducer))
  const [dataList,setDataList]=useState([])
  const [key,setKey]=useState('')
  useEffect(()=>{
      if(!courses.data){
        return
      }
      console.log(key)
     const datas= courses.data.filter(c => c.name.toLowerCase().includes(key))
     console.log(datas);
     setDataList([...datas])
  },[key])
  return (
    <>

    {
      courses.data === null ? <Spinner /> :
    
    <div className='home-container'>
        <Navbar />
        <div className="home-content container">
        <div className=" mt-5">
        
            <input list="courses" name="course" id="course" value={key} className="form-control" onChange={e => setKey(e.target.value)}/>

            <datalist id="courses">
              {dataList.map(d=>(
                <option value={d.name} key={d._id} ><Link to={`/courses/${d._id}`} >{d.name}</Link></option>
              ))}
            
            </datalist>
            
        </div>
        <div className="row  my-5">
          
          {courses?.data.map(course => (
            <div className="col-4 mb-3">
            <Card course={course} key={course._id} />
            </div>
          ))}
          
        </div>
        </div>
    </div>
  
 
    }
     </>
  )
}

export default Home