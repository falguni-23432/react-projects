import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    status: false,
    userData: null
}


const authSlice = createSlice({
          name:"auth",
          initialState,
          reducers:{
              authLogin:(state, action) =>{
                state.status =true;
                state.userData = action.payload.userData;
              },
              logout: (state)=>{
                   state.status= false;
                   state.userData=null;
              }
          }
})



export const {authLogin, logout} = authSlice.actions;
export default authSlice.reducer;