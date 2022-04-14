import {render, screen} from "@testing-library/react";
import CurrentCourse from "./CurrentCourse";


describe('when rendered', () => {
    it('should display correct current course value', () => {
        render(<CurrentCourse/>)

        expect(screen.getByText(/100500₽/)).toBeInTheDocument()
    })
})