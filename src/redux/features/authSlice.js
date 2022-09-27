import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/mockClient'

const initialState = {
    data: null,
    status: 'unAuthourized',
}

export const authLogin = createAsyncThunk('auth/loginInfo',
    async (loginData) => {
        const response = await client.post('/mockApi/login', loginData)
        return response.data
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login(state, action) {
            const { status } = action.payload
            state.status = status; // authourized
        },
        logout(state, action) {
            const { status } = action.payload
            state.status = status; // unAuthourized
        },
    },
    extraReducers(builder) {
        builder
            .addCase(authLogin.fulfilled, (state, action) => {
                state.data = action.payload;
            })
    }
})

export const authActions = authSlice.actions;

export default authSlice.reducer