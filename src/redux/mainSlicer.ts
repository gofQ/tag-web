import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../utils/config";

type initialStateType = {
    loginHistory?:[];
}

const initialState: initialStateType = {
    loginHistory:[],
}


export const getLoginHistory=createAsyncThunk(
    "main/getLoginHistory",
    async()=>{
        const response=await fetch(`${API_URL}/api/admins/history`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                 'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
            });

        return response.json();
    }
)

export const mainSlicer = createSlice({
    name: "main",
    initialState,
    reducers: {
        
    },
    extraReducers(builder) {
        builder.addCase(getLoginHistory.fulfilled, (state, action) => {
            state.loginHistory = action.payload;
        })
    },
})



export default mainSlicer.reducer;
