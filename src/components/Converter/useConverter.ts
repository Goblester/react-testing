import {useEffect, useState} from "react";
import {rubToUsd, usdToRub} from "../../domain/converter";

type DirectionType = 'usd-rub' | 'rub-usd'

export const useConverter = (initialRubAmount: number, course: number) => {
    const calculatedUsdAmount = rubToUsd(initialRubAmount, course)
    const [rub, setRub] = useState(initialRubAmount)
    const [usd, setUsd] = useState(calculatedUsdAmount)

    useEffect(() => {
        setRub(initialRubAmount)
        const newUsd = rubToUsd(initialRubAmount, course)
        setUsd(newUsd)
    }, [initialRubAmount, course])

    const createUpdater = (direction: DirectionType) => {

        const isRubConversion = direction === 'rub-usd'
        const converter = isRubConversion ? rubToUsd : usdToRub
        const newValueSetter = isRubConversion ? setRub : setUsd
        const convertSetter = isRubConversion ? setUsd : setRub

        return function update(value: string | number){
            const newValue = Number(value)
            const convertValue = converter(newValue, course)
            newValueSetter(newValue)
            convertSetter(convertValue)
        }
    }

    const updateRub = createUpdater('rub-usd')
    const updateUsd = createUpdater('usd-rub')
    return {
        rub,
        usd,
        updateRub,
        updateUsd
    }

}