import * as api from '../api'
import { setCurrentUser } from './currentUser'


export const signUp=(authData,navigate) => async(dispatch) =>{
    try {
            const {data}= await api.signUp(authData)
         
            dispatch({type:'AUTH',data})
            dispatch(setCurrentUser(JSON.parse(localStorage.getItem('EduLearn'))))
            navigate("/home")
    } catch (err) {
        console.log(err.message);
    }
}

export const login= (authData,navigate) => async(dispatch) =>{
    try{
        const {data} = await api.logIn(authData)
        dispatch({type:'AUTH',data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('EduLearn'))))
        navigate("/home")
    }catch(err){
         console.log(err.message)
    }
    
}

