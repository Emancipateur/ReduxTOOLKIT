import React from 'react';

import { useSelector, useDispatch} from 'react-redux'
import '../styles/home.css'
import { deleteUser} from '../storetoo'

const Home = () => {

    const users = useSelector(state => state.user.value)

    const dispatch = useDispatch()


    return (
        <div className='home'>
            <div className="homeContent">
                <div className="userList">
                    <ul> Utilisateur enregistrés
                     {users.map((item)=> {
                         return( <li key={item.id}><span>{item.name}<p> <u>id : {item.id}</u></p></span>
                         <button onClick={() => dispatch(deleteUser(item.id))}>X</button>
                            </li>
                         )

                     })}
                    </ul>
                </div>
            </div>
            
        </div>
    );
};



export default Home;