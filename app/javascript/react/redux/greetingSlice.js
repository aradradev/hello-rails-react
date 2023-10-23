import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const base_url = 'http://localhost:3000/api/greetings/random_greeting'
export const fetchRandomGreeting = createAsyncThunk(
    'greeting/fetchRandomGreeting', async () => {
        const response = await fetch(base_url)
        const data = await response.json()
        console.log('Data fetched')
        console.log(data)
        return data.greeting
    }
)

const greetingSlice = createSlice({
    name: 'greeting',
    initialState: {
        text: '',
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRandomGreeting.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchRandomGreeting.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.text = action.payload
            })
            .addCase(fetchRandomGreeting.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const { setGreeting } = greetingSlice.actions
export default greetingSlice.reducer