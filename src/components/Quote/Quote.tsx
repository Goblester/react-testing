import {quotes} from "./quotes";
import S from './Quote.module.css';

export const Quote = () => {
    const quote = quotes[0]

    return (
        <footer className={S.quote}>
            <blockquote>{quote.text}</blockquote>
            <cite className={S.author}>- {quote.author}</cite>
        </footer>

    )
}

export default Quote