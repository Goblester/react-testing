import {screen} from "@testing-library/react";
import {Converter} from "./Converter";
import userEvent from "@testing-library/user-event";
import {render} from "../../test-utils/renderWithRedux";

const mockUpdateRub = jest.fn()
const mockUpdateUsd = jest.fn()
const mockInitialRender = jest.fn()

jest.mock('./useConverter.ts', () => ({
        useConverter: (value: number, course: number) => {
            mockInitialRender(course)
            return ({
                rub: 100,
                usd: 2.38,
                updateRub: mockUpdateRub,
                updateUsd: mockUpdateUsd
            })
        }
    })
)

beforeEach(() => jest.clearAllMocks())
afterAll(() => jest.restoreAllMocks())

describe('when rendered', () => {

    it('rub input should have a value with a rub amount', () => {
        render(<Converter/>)
        expect(screen.getByLabelText(/Сумма в рублях/)).toHaveValue(100)
    })

    it('usd input should have a value with a usd amount', () => {
        render(<Converter/>)
        expect(screen.getByLabelText(/Сумма в долларах/)).toHaveValue(2.38)
    })

    it('should call the `useConverter` hook with a course value from the store', () => {
        const stateMock = {course: {currentCourse: 100500}}
        render(<Converter/>, {preloadedState: stateMock})
         expect(mockInitialRender).toHaveBeenCalledWith(100500)
    })
})

describe('when typed in a RUB input', () => {
    it('should update its value', async () => {
        render(<Converter/>)
        const input = screen.getByLabelText(/Сумма в рублях/);
        userEvent.clear(input)
        await userEvent.type(input, '4')
        expect(mockUpdateRub).toHaveBeenCalledWith(1004)
    })
})

describe('when typed in a USD input', () => {
    it('should update its value', async () => {
        render(<Converter/>)
        const input = screen.getByLabelText(/Сумма в долларах/)
        await userEvent.type(input, '4')
        expect(mockUpdateUsd).toHaveBeenLastCalledWith(2.384)
    })
})