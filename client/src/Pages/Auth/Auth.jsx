import React,{useState,useEffect} from 'react'
import SignUp from '../../components/SignUp/SignUp'
import Login from '../../components/Login/Login'
import Logo from '../../components/Logo/Logo'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import decode from 'jwt-decode'
import { setCurrentUser } from '../../actions/currentUser'
import './Auth.scss'

const Auth = () => {
    const [login,isLogin]=useState(true);

    const dispatch=useDispatch();
    const navigate=useNavigate()
    const handleSwitch = () =>{
        isLogin(!login)
    }

     useEffect(()=>{
        const result = JSON.parse(localStorage.getItem("EduLearn"))
        const token=result?.token;
      
        if(token){
                const decodedToken = decode(token)
                if(decodedToken.exp *1000  < new Date().getTime()){
                    handleLogout()
                    return
                }
                navigate('/home')
                
                 
                
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("EduLearn"))))
      
    },[dispatch])

    const handleLogout = () =>{
        dispatch({type:"LOGOUT"})
        navigate('/')
        dispatch(setCurrentUser(null))   
    }

  return (
    <div className='auth-container container mt-5'>
      <Logo />
        {
            login ? 
            
            <> 
            <Login /> 
            <p className='text-center mt-4 switch-content' >Dont Have an account <span onClick={handleSwitch}>New User ? </span></p>
             </>
            : <> 
            <SignUp />
             <p  className='text-center mt-4 switch-content' >Already a User <span onClick={handleSwitch}> Login ?</span></p>
              </>
        }
    </div>
  )
}

export default Auth