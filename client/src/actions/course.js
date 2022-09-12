import * as api from '../api'

export const createCourse = (courseData,navigate) => async(dispatch) =>{
    try{
        const {data}=await api.createCourse(courseData)
        navigate('/home')
    }catch(err){
        console.log(err.message)
    }
}

export const getAllCourse = () =>async(dispatch) =>{
    try {
        const {data} = await api.getAllCourse();
        dispatch({type:'FETCH_ALL_COURSE',payload:data})
    } catch (err) {
        console.log(err.message)
    }
}
