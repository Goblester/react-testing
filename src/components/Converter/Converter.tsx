import React from "react";
import S from './Converter.module.css';

export const Converter: React.FC = () => {

    return (
        <form className={S.converter}>
            <label>
                <p>Сумма в рублях</p>
                <input type={'number'} name={'rub'} min={0} step={'1'}/>
            </label>

            <label>
                <p>Сумма в долларах</p>
                <input type={'number'} name={'usd'} min={0} step={'1'}/>
            </label>
        </form>
    )
}