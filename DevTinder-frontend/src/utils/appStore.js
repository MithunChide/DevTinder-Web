import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedUserReducer from "./feedUser"

const appStore = configureStore({
   reducer : {
        user: userReducer,
        feed : feedUserReducer,
   }
})

export default appStore;