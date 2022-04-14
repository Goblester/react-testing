import {useState} from "react";
import {rubToUsd} from "../../domain/converter";


export const useConverter = (initialRubAmount: number = 100, course: number) => {
    const calculatedUsdAmount = rubToUsd(initialRubAmount, course)
    const [rub, setRub] = useState(initialRubAmount)
    const [usd, setUsd] = useState(calculatedUsdAmount)

    return {
        rub,
        usd,
        updateRub: setRub,
        updateUsd: setUsd
    }

}