export type CourseApiDataType = {
    date: string
    usd: {
        [key: string]: number
    }
}

export const fetchCourse = async (): Promise<CourseApiDataType> => {
    const response = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json')
    return await response.json()

}