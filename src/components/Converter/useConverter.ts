import {useState} from "react";
import {rubToUsd, usdToRub} from "../../domain/converter";


export const useConverter = (initialRubAmount: number = 100, course: number) => {
    const calculatedUsdAmount = rubToUsd(initialRubAmount, course)
    const [rub, setRub] = useState(initialRubAmount)
    const [usd, setUsd] = useState(calculatedUsdAmount)

    const updateRub = (value: string | number) => {
        const newRub = Number(value)
        const newUsd = rubToUsd(newRub, course)
        setRub(newRub)
        setUsd(newUsd)
    }

    const updateUsd = (value: string | number) => {
        const newUsd = Number(value)
        const newRub = usdToRub(newUsd, course)
        setRub(newRub)
        setUsd(newUsd)
    }

    return {
        rub,
        usd,
        updateRub,
        updateUsd
    }

}