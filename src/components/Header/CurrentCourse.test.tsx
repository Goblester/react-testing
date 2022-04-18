import { render } from "../../test-utils/renderWithRedux";
import {screen} from "@testing-library/react";
import CurrentCourse from "./CurrentCourse";
import courseTestState from "../../features/store/course/courseTestState";


describe('when rendered', () => {
    it('should display correct current course value', () => {
        render(<CurrentCourse/>, {preloadedState:  {course: {...courseTestState.idle, currentCourse: 100500}}, renderOptions : {}})

        expect(screen.getByText(/100500₽/)).toBeInTheDocument()
    })
})