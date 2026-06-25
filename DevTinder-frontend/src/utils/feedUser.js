import { createSlice } from "@reduxjs/toolkit";


const feedUser = createSlice({
    name: "Feed",
    initialState : null,

    reducers: {
        addFeedUser : (state, action) => {
            return action.payload;
        },
        removeFeedUser : (state, action) => {
            return null
        }
    }
})

export const {addFeedUser, removeFeedUser} = feedUser.actions;
export default feedUser.reducer;