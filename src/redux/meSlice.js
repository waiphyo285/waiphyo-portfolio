import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../api/mockClient'

const initialState = {
    data: {},
    status: 'pending',
}

export const fetchMe = createAsyncThunk('me/fetchInfo', async () => {
    const response = await client.get('/mockApi/me')
    return response.data
})

const meSlice = createSlice({
    name: 'me',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchMe.fulfilled, (state, action) => {
            state.status = 'success'
            state.data = action.payload
        })
    },
})

export default meSlice.reducer
