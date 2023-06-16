
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {persistReducer} from 'redux-persist'
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import themeReducer from '../features/ModeSlice'



const persistConfig={
    key : "root",
    version : 1,
    storage
};

const reducer=combineReducers({
    theme:themeReducer,
    
});

const persistedReducer=persistReducer(persistConfig,reducer);


export const store=configureStore({
    reducer :persistedReducer,
      
    middleware :(getDefaultMiddleware)=>getDefaultMiddleware().concat(),
})

setupListeners(store.dispatch)