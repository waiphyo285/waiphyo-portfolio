import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../api/client'

const initialState = {
    data: [],
    status: 'pending',
}

export const fetchProject = createAsyncThunk('project/fetchInfo', async () => {
    const response = await client.get('/mockApi/project')
    return response.data
})

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchProject.fulfilled, (state, action) => {
            state.status = 'success'
            state.data = action.payload
        })
    },
})

export default projectSlice.reducer
