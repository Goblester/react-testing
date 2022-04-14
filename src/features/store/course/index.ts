import {slice} from "./slice";
import {RootState} from "../index";


const courseReducer = slice.reducer

export const courseActions = slice.actions

export const courseSelectors = {
    selectCurrentCourse: (state: RootState) => state.course.currentCourse
}

export default courseReducer