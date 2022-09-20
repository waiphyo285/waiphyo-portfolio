import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../api/mockClient'

const initialState = {
    data: [],
    status: 'pending',
}

export const fetchContact = createAsyncThunk('contact/fetchInfo', async () => {
    const response = await client.get('/mockApi/contact')
    return response.data
})

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchContact.fulfilled, (state, action) => {
            state.status = 'success'
            state.data = action.payload
        })
    },
})

export default contactSlice.reducer
