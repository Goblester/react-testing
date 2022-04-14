import React, {useState} from "react";
import S from './Converter.module.css';
import {useConverter} from "./useConverter";

export const Converter: React.FC = () => {
    const {rub, usd, updateUsd, updateRub} = useConverter()

    return (
        <form className={S.converter}>
            <label>
                <p>Сумма в рублях</p>
                <input type={'number'} name={'rub'} min={0} step={'1'}
                       value={rub}
                       onChange={(e) => updateRub(+e.currentTarget.value)}
                />
            </label>

            <label>
                <p>Сумма в долларах</p>
                <input type={'number'} name={'usd'} min={0} step={'1'}
                       value={usd}
                       onChange={(e) => updateUsd(+e.currentTarget.value)}
                />
            </label>
        </form>
    )
}