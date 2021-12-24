import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
    name: 'user',
    initialState: { value : [{name: "", id: Math.random()}]},
    reducers: {
        login: (state, action) => {
            state.value = [...state.value,action.payload]
        },
        logout: (state) => {
            state.value = [] },
        deleteUser: (state, action) =>{

            state.value = [...state.value.filter(item => item.id !== action.payload)]

        
        }

    }

    

})

export const { login, logout, deleteUser} = userSlice.actions
export default userSlice

