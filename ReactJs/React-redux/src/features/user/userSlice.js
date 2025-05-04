import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react";


export const fetchUsers = createAsyncThunk('user/fetchusers',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        return data;
    }
);


const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        loading: false,
        error: null
    },
    reducers: {
        clearUsers: (state) => {
            state.users = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = "Failed to fetch users"
            })
    }
})


export const { clearUsers } = userSlice.actions
export default userSlice.reducer