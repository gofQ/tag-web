import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../utils/config";

export const funcs=createApi({
    reducerPath:"funcs",
    baseQuery:fetchBaseQuery({baseUrl:API_URL,
        prepareHeaders:(headers)=>{
            const token=localStorage.getItem("token");
            if(token){
                headers.set("authorization",`Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints:(builder)=>({
        addScooter: builder.mutation({
            query: (body) => ({
                url: "/api/scooters/add",
                method: "POST",
                body,
            }),
        }),
        updateScooter:builder.mutation({
            query:(body)=>({
                url:"/api/scooters/update",
                method:"PUT",
                body,
            }),
        }),
        getScooters:builder.query({
            query:()=>({
                url:"/api/scooters/all",
                method:"GET",
            }),
        }),
        sendNotifications:builder.mutation({
            query:(body)=>({
                url:"/api/notifications/send",
                method:"POST",
                body,
            }),
        }),
        getNotifications:builder.query({
            query:()=>({
                url:"/api/notifications/all",
                method:"GET",
            }),
        }),

    }),
});

export const {useAddScooterMutation,useUpdateScooterMutation,useGetScootersQuery,useSendNotificationsMutation,useGetNotificationsQuery}:any=funcs;