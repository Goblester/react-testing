import React, {useState} from "react";
import S from './Converter.module.css';

export const Converter: React.FC = () => {
    const [rub, setRub] = useState(100)
    const [usd, setUsd] = useState(1)

    return (
        <form className={S.converter}>
            <label>
                <p>Сумма в рублях</p>
                <input type={'number'} name={'rub'} min={0} step={'1'}
                       value={rub}
                       onChange={(e) => setRub(+e.currentTarget.value)}
                />
            </label>

            <label>
                <p>Сумма в долларах</p>
                <input type={'number'} name={'usd'} min={0} step={'1'}
                       value={usd}
                       onChange={(e) => setUsd(+e.currentTarget.value)}
                />
            </label>
        </form>
    )
}