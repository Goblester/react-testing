

export const fetchCourse = async () => {
    const response = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json')
    const data = await  response.json()
    return data
}