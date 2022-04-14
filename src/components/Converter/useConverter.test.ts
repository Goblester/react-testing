import {renderHook} from "@testing-library/react-hooks";
import {useConverter} from "./useConverter";

const initialRubAmount = 100
const course = 42
const calculatedUsdAmount = 2.38

describe('when rendered', () => {
    const {result} = renderHook(() => useConverter(initialRubAmount, course))

    it('RUB input should be equal to initial RUB amount', () => {
        expect(result.current.rub).toEqual(initialRubAmount)
    })
    it('USD input should be correctly calculated USD amount', () => {
        expect(result.current.usd).toEqual(calculatedUsdAmount)
    })
})

describe('when called an `updateRub` method', () => {
    it.todo('should update the RUB value')
    it.todo('should recalculate the USD value')
})

describe('when called an `updateUsd` method', () => {
    it.todo('should update the USD value')
    it.todo('should recalculate the RUB value')
})

describe('when re-rendered', () => {
    it.todo('should update its values')
})

export default {}