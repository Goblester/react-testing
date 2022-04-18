import {render} from "../../../test-utils/renderWithRedux";
import {RefreshCourse} from "./RefreshCourse";
import {fireEvent, screen} from "@testing-library/react";
import courseStateTest from "../../../features/store/course/courseTestState";
import userEvent from "@testing-library/user-event";


describe('when rendered', () => {
    it('should display default text', () => {
        render(<RefreshCourse/>)

        expect(screen.getByText(/Обновить курс/)).toBeInTheDocument()
    })
})

describe('when loading', () => {
    it('should display loading text', () => {
        const preloadedState = {course: courseStateTest.loading}
        render(<RefreshCourse/>, {preloadedState})
        expect(screen.getByText(/Обновляем курс.../)).toBeInTheDocument()
    })
})

describe('when error', () => {
    it('should display additional error text', () => {
        const preloadedState = {course: courseStateTest.error}
        render(<RefreshCourse/>, {preloadedState})
        expect(screen.getByText(/Обновить курс/)).toBeInTheDocument()
        expect(screen.getByText(new RegExp(courseStateTest.error.error as string))).toBeInTheDocument()
    })
})

describe('when button is clicked', () => {
    it('should call the required action', () => {
        const dispatchMock = jest.fn()

        render(<RefreshCourse/>, {dispatch: dispatchMock})
        fireEvent.click(screen.getByRole('button'))

        expect(dispatchMock).toHaveBeenCalled()
    })
})