import {render} from "../../../test-utils/renderWithRedux";
import {RequestCourseButton} from "./RequestCourseButton";
import {screen} from "@testing-library/react";
import courseStateTest from "../../../features/store/course/courseTestState";


describe('when rendered', () => {
    it('should display default text', () => {
        render(<RequestCourseButton/>)

        expect(screen.getByText(/Обновить курс/)).toBeInTheDocument()
    })
})

describe('when loading', () => {
    it('should display loading text', () => {
        const preloadedState = {course: courseStateTest.loading}
        render(<RequestCourseButton/>, {preloadedState})
        expect(screen.getByText(/Обновляем курс.../)).toBeInTheDocument()
    })
})

describe('when error', () => {
    it('should display additional error text', () => {
        const preloadedState = {course: courseStateTest.error}
        render(<RequestCourseButton/>, {preloadedState})
        expect(screen.getByText(/Обновить курс/)).toBeInTheDocument()
        expect(screen.getByText(new RegExp(courseStateTest.error.error as string))).toBeInTheDocument()
    })
})
