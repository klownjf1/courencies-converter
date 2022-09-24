import React from 'react';
import s from './Header.module.css'

const HeaderCurrency = ({dataCurrency}) => {

    const headerCurrency = dataCurrency.map(item =>
        item.ccy === 'USD' ? <div key = {Math.random()}> $ - {item.buy} / {item.sale}</div> : ''
    )

    return (
        <div className={s.header__currency}>
            {headerCurrency}
        </div>
    );
};

export default HeaderCurrency;