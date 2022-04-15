import { render } from "../../test-utils/renderWithRedux";
import {screen} from "@testing-library/react";
import CurrentCourse from "./CurrentCourse";


describe('when rendered', () => {
    it('should display correct current course value', () => {
        render(<CurrentCourse/>, {preloadedState:  {course: {currentCourse: 100500}}, renderOptions : {}})

        expect(screen.getByText(/100500₽/)).toBeInTheDocument()
    })
})