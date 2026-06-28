import { createSlice } from "@reduxjs/toolkit";


const feedUser = createSlice({
    name: "Feed",
    initialState : null,

    reducers: {
        addFeedUser : (state, action) => {
            return action.payload;
        },
        removeUserFromFeed : (state, action) => {
            const feedArray = state.filter(f => f._id !== action.payload )
            return feedArray
        }
    }
})

export const {addFeedUser, removeUserFromFeed} = feedUser.actions;
export default feedUser.reducer;