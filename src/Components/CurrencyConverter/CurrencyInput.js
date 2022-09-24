import React from 'react';
import s from './CurrencyConverter.module.css'

const CurrencyInput = (props) => {

    const onKeyPressNumber = (event) => {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        }
    }

    return (
        <div>
            <input type="text"
                   value = {props.amount}
                   onChange={(ev) => props.onAmountChange(ev.target.value)}
                   onKeyPress ={onKeyPressNumber}
                   className={s.currency__converter__input}
            />
            <select
                value={props.currency}
                onChange={(ev) => props.onCurrencyChange(ev.target.value)}
                className={s.currency__converter__select}
            >
                {props.currencies.map(currency => (
                    <option
                        value={currency.cc}
                        key={Math.random()}
                        className={s.currency__converter__option}
                    >
                        {currency.cc}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CurrencyInput;