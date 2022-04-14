import {act, renderHook} from "@testing-library/react-hooks";
import {useConverter} from "./useConverter";

const initialRubAmount = 100
const course = 42
const calculatedUsdAmount = 2.38

describe('when rendered', () => {

    it('RUB input should be equal to initial RUB amount', () => {
        const {result} = renderHook(() => useConverter(initialRubAmount, course))

        expect(result.current.rub).toEqual(initialRubAmount)
    })
    it('USD input should be correctly calculated USD amount', () => {
        const {result} = renderHook(() => useConverter(initialRubAmount, course))

        expect(result.current.usd).toEqual(calculatedUsdAmount)
    })
})

describe('when called an `updateRub` method', () => {
    it('should update the RUB value', () => {
        const {result} = renderHook(() => useConverter(initialRubAmount, course))
        act(() => {
            result.current.updateRub(10)
        })
        expect(result.current.rub).toEqual(10)
    })
    it('should recalculate the USD value', () => {
        const {result} = renderHook(() => useConverter(initialRubAmount, course))
        act(() => {
            result.current.updateRub(10)
        })
        expect(result.current.usd).toEqual(0.24)
    })
})

describe('when called an `updateUsd` method', () => {
    it('should update the USD value', () => {
        const {result} = renderHook(() => useConverter(initialRubAmount, course))
        act(() => {
            result.current.updateUsd(10)
        })
        expect(result.current.usd).toEqual(10)
    })
    it('should recalculate the RUB value', () => {
        const {result} = renderHook(() => useConverter(initialRubAmount, course))
        act(() => {
            result.current.updateUsd(10)
        })
        expect(result.current.rub).toEqual(420)
    })
})

describe('when re-rendered', () => {
    it('should update its values', () => {
        const {result, rerender} = renderHook(({value, course}) => useConverter(value, course), {
            initialProps: {
                value: initialRubAmount,
                course
            }
        })

        rerender({value: 10, course: 50})

        const {rub, usd} = result.current
        expect(rub).toEqual(10)
        expect(usd).toEqual(0.2)
    })
})

