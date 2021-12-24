import React from 'react';
import { useSelector, useDispatch} from 'react-redux'
import {login, logout} from '../storetoo'



const Profile = () => {
    let inputValue = ""
    const handleInput = (e) => {
       inputValue = e.target.value

    }
    
    const user = useSelector((state) => state.user.value)
    const dispatch = useDispatch()
  
    return (
        <div>
            <input type="text" placeholder="Nom" onChange={handleInput}/>
            <button  onClick={() => {dispatch(login({ name:inputValue, id:Math.random()}))}}>LOG IN</button>
            <button onClick={() => {dispatch(logout())}}>LOG out</button>
    

             </div>

    );
};

export default Profile;