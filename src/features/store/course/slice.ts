import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchCourse} from "../../../api";
import getRubCourse from "../../../utils/getRubCourse";


export type CourseStatusType = 'idle' | 'loading' | 'success' | 'error'

export type CourseInitialStateType = {
    currentCourse: number
    status: CourseStatusType
    error: string | null
}

export const initialState: CourseInitialStateType = {
    currentCourse: 42,
    status: 'idle',
    error: null
}

export const getCurrentCourse = createAsyncThunk<{ currentCourse: number }, void, {
    rejectValue: { message: string }
}>('course', async () => {
    console.log('asd')
    const response = await fetchCourse()
    const currentCourse = getRubCourse(response)
    return {currentCourse}
})

export const slice = createSlice({
    name: 'course',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getCurrentCourse.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(getCurrentCourse.fulfilled, (state, action) => {
            state.status = 'success'
            state.currentCourse = action.payload.currentCourse
        })
        .addCase(getCurrentCourse.rejected, (state, action) => {
            state.status = 'error'
            state.error = action.payload?.message || action.error?.message || ''

        })
})

