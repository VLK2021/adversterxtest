import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../../services/index.js";


const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            return await userService.getAll();
        } catch (e) {
            return rejectWithValue(e)
        }
    }
);


const initialState = {
    users: [],
    filteredUsers: [],
    status: null,
    error: null
}


const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        filterUsers: (state, action) => {
            const filters = action.payload;
            state.filteredUsers = state.users.filter(user => {
                return Object.entries(filters).every(([key, value]) => {
                    if (!value) return true;
                    const val = (user[key] || "").toString().toLowerCase();
                    return val.includes(value.toLowerCase());
                });
            });
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAllUsers.pending, state => {
                state.status = 'Loading';
                state.error = null;
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.users = action.payload;
                state.filteredUsers = action.payload;
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            })
    }
});

const {reducer: userReducer, actions} = userSlice;

const userActions = {
    ...actions,
    getAllUsers
}

export {
    userActions,
    userReducer
}