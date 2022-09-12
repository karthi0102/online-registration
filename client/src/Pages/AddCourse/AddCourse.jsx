import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import './AddCourse.scss'
import Navbar from '../../components/Navbar/Navbar'
const AddCourse = () => {
    const [videos,setVideos] =  useState([{name:'',link:'',id:uuidv4()}])
    const handleLinks = () =>{
        setVideos([...videos,{'name':'','link':'','id':uuidv4()}])
    }
    const handleChange = (e,id)=>{
        const newValues =  videos.map(v =>{
            if(v.id === id){
                if(e.target.name === 'name'){
                    v['name']=e.target.value
                }else{
                    v['link']=e.target.value
                }
            }
            return v;
        })
       setVideos(newValues)
    }

    const handleDelete = (id)=>{
        const newValues = videos.filter(v => v.id!=id)
        setVideos(newValues)
    }
  return (
   <div className="addcourse-container">
            <Navbar />
            <div className="addcourse-form mt-5">
                    <div className="row">
                        <div className="col-8 offset-2">
                            <h2 className='text-center'>Add Your New Course karthi</h2>
                            <div className="card shadow mt-2">
                                <div className="card-body">
                                    <form className='row gx-5'>
                                <div className="form-group mb-3">
                                <label  className="form-label">Course Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group mb-3">
                                <label  className="form-label">Course Thumbnail</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group mb-3">
                                <label  className="form-label">Course Description</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group mb-3">
                                <label  className="form-label">Course Duration (in hrs)</label>
                                <input type="number" className="form-control"/>
                            </div>
                            
                            <div className="form-group">
                                <label className="form-label"> Video Links <span onClick={handleLinks}> <i className="fa-solid fa-plus"></i></span></label>

                            {videos.map((v,idx) => (
                            
                                <div className='mb-3' key={v.id}> 

                                    <h6 className='mt-3'>Video {idx+1}  <span onClick={()=> handleDelete(v.id)}><i className="fa-solid fa-trash"></i></span> </h6>

                                    <input type="text" className='form-control mb-1'  name="name" placeholder='title' value={v.name} onChange={ e => handleChange(e,v.id)} />
                                   
                                  
                                    <input type="url"  className='form-control mb-1' name="link" placeholder='video-link' value={v.link} onChange={ e => handleChange(e,v.id)} />
                                    
                                </div>
                            ))}
                            </div>
                            
                            <div className="d-grid gap-2">
                                <button className="btn btn-info">New Course</button>
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

export default AddCourse