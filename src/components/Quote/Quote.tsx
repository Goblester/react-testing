import {quotes} from "./quotes";


export const Quote = () => {
    const quote = quotes[0]

    return (
        <>
            <blockquote>{quote.text}</blockquote>
            <cite>- {quote.author}</cite>
        </>

    )
}

export default Quote