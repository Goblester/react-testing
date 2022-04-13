import {quotes} from "./quotes";
import S from './Quote.module.css';

export const Quote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    const quote = quotes[randomIndex]

    return (
        <footer className={S.quote}>
            <blockquote>{quote.text}</blockquote>
            <cite className={S.author}>- {quote.author}</cite>
        </footer>

    )
}

export default Quote