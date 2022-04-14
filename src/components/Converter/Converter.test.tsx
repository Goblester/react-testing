import {render, screen} from "@testing-library/react";
import {Converter} from "./Converter";
import userEvent from "@testing-library/user-event";

const mockUpdateRub = jest.fn()
const mockUpdateUsd = jest.fn()

jest.mock('./useConverter.ts', () => ({
        useConverter: () => ({
            rub: 100,
            usd: 2.38,
            updateRub: mockUpdateRub,
            updateUsd: mockUpdateUsd
        })
    })
)

describe('when rendered', () => {

    it('rub input should have a value with a rub amount', () => {
        render(<Converter/>)
        expect(screen.getByLabelText(/Сумма в рублях/)).toHaveValue(100)
    })

    it('usd input should have a value with a usd amount', () => {
        render(<Converter/>)
        expect(screen.getByLabelText(/Сумма в долларах/)).toHaveValue(2.38)
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