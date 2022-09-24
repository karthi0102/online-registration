import * as api from '../api'
import { setCurrentUser } from './currentUser'


export const signUp=(authData,navigate) => async(dispatch) =>{
    try {
            const {data}= await api.signUp(authData)
         
            dispatch({type:'AUTH',data})
            dispatch(setCurrentUser(JSON.parse(localStorage.getItem('EduLearn'))))
            navigate("/home")
    } catch (err) {
        alert(err.message);
    }
}

export const login= (authData,navigate) => async(dispatch) =>{
    try{
        const {data} = await api.logIn(authData)
        dispatch({type:'AUTH',data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('EduLearn'))))
        navigate("/home")
    }catch(err){
         alert(err.message)
    }
    
}

export const editProfile = (editData,navigate) =>async(dispatch) =>{
        try {
            const {data} =api.editProfile(editData)
            navigate('/home')
            alert("edit successfull")
        } catch (err) {
            console.log(err.message)
        }    
}
