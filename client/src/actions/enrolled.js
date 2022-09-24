import * as api from '../api'

export const getEnrolledCourse = (id) => async(dispatch) =>{
    try {
        const {data} = await api.getEnrolledCourse(id);
    
        dispatch({type:'FETCH_MY_ENROLLED_COURSE',payload:data})
    } catch (error) {
            console.log(error.message)
    }
}