import { configureStore } from "@reduxjs/toolkit";
import mainSlicer from "./mainSlicer";
import { funcs } from "./services/func";
import { admin } from "./services/admin"; 
import { setupListeners } from "@reduxjs/toolkit/query";


export const store = configureStore({
  reducer: {
    main: mainSlicer,
    [funcs.reducerPath]: funcs.reducer, 
    [admin.reducerPath]: admin.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(funcs.middleware, admin.middleware), 
});


setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store; 
