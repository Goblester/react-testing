import {getCurrentCourse, slice} from "./slice";
import {RootState} from "../index";


const courseReducer = slice.reducer


export const courseActions = {
    ...slice.actions,
    getCurrentCourse
}

export const courseSelectors = {
    selectCurrentCourse: (state: RootState) => state.course.currentCourse,
    selectStatus: (state: RootState) => state.course.status,
    selectError: (state: RootState) => state.course.error,
}

export default courseReducer