import { createSlice } from "@reduxjs/toolkit";
// import idocument from "../component/document";

// biodata,churchdata,securitydata
const SubmittedformSlice  = createSlice({
    name:"submtedform",
    initialState:{
        allformvalue:[]
    },

    reducers:{
        biodatas:(state,action)=>{
            const tom = action.payload
            console.log(tom);
            state.contentvalue = [...state.contentvalue,action.payload]
        },

        churchdatas:(state,action)=>{
            const tom = action.payload
            console.log(tom);
            state.contentvalue = [...state.contentvalue,action.payload]
        },

        securitydatas:(state,action)=>{
            const tom = action.payload
            console.log(tom);
            state.contentvalue = [...state.contentvalue,action.payload]
        }
    },
})
export const {biodatas,churchdatas,securitydatas} = SubmittedformSlice.actions;

export default SubmittedformSlice.reducer