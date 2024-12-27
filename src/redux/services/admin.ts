import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../utils/config";


export const admin=createApi({
    reducerPath:"admin",
    baseQuery:fetchBaseQuery({baseUrl:API_URL}),
    endpoints:(builder)=>({
        register:builder.mutation({
            query:(body)=>({ 
                url:"/api/admins/register",
                method:"POST",
                body,
            }),
        }),
        login:builder.mutation({
            query:(body)=>({
                url:"/api/admins/login",
                method:"POST",
                body,
            }),
        }),
    }),
});

export const {useRegisterMutation,useLoginMutation}:any=admin;

