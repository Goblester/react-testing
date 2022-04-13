import {quotes, QuoteType} from "./quotes";


export const selectRandomQuote = (quotes: Array<QuoteType>): QuoteType => {
    const randomIndex = Math.floor(Math.random() * quotes.length)

    return quotes[randomIndex]
}