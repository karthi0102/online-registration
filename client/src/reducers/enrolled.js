const enrolledReducer = (state={data:null},action) =>{
    switch(action.type){
        case 'FETCH_MY_ENROLLED_COURSE':
            return {...state,data:action.payload}
        
        default:
            return state
    }
}

export default enrolledReducer