import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../api/client'

const initialState = {
    data: [],
    status: 'pending',
}

export const fetchBanner = createAsyncThunk('banner/fetchInfo', async () => {
    const response = await client.get('/mockApi/banner')
    return response.data
})

const bannerSlice = createSlice({
    name: 'banner',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchBanner.fulfilled, (state, action) => {
            state.status = 'success'
            state.data = action.payload
        })
    },
})

export default bannerSlice.reducer
