import { configureStore } from "@reduxjs/toolkit";
import  mainSlicer  from "./mainSlicer";



export const store=configureStore({
    reducer:{
        main:mainSlicer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware(
        {
            serializableCheck:false,
        }
    )
});

export type RootState=ReturnType<typeof store.getState>;

