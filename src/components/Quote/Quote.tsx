import {quotes, QuoteType} from "./quotes";
import S from './Quote.module.css';
import {selectRandomQuote} from "./selectRandomQuote";
import * as React from "react";

const defaultQuote = selectRandomQuote(quotes)


type QuoteProps = {
    quote?: QuoteType
}

export const Quote: React.FC<QuoteProps> = (props) => {

    const {
        quote = defaultQuote
    } = props

    const {text, author} = quote;

    return (
        <footer className={S.quote}>
            <blockquote>{text}</blockquote>
            <cite className={S.author}>- {author}</cite>
        </footer>

    )
}

export default Quote