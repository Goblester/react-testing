

export const rubToUsd = (value: number, course: number): number => {
    return Number((value / course).toFixed(2))
}


export const usdToRub = (value: number, course: number): number => {
    return Number((value * course).toFixed(2))
}