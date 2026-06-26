import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedUserReducer from "./feedUser";
import connectionReducer from "./connectionSlice";
import requestReducer from "./requestSlice";

const appStore = configureStore({
   reducer : {
        user: userReducer,
        feed : feedUserReducer,
        connection: connectionReducer,
        request : requestReducer,
   }
})

export default appStore;