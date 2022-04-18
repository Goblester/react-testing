import {CourseInitialStateType, initialState} from "./slice";

type CourseStateTestType = {
    [key: string]: CourseInitialStateType
}

const courseTestState: CourseStateTestType = {
    idle: initialState,
    loading: {
        ...initialState,
        status: 'loading'
    },
    success: {
        ...initialState,
        status: 'success',
        currentCourse: 32
    },
    error: {
        ...initialState,
        status: 'error',
        error: 'loading errror...'
    }
}


export default courseTestState