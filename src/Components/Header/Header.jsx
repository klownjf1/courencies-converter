import React, {useEffect, useState} from 'react';
import HeaderCurrency from "./HeaderCurrency";
import s from "./Header.module.css";

const Header = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11`)
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);

    return (
        <header className={s.header__root}>
            <div className={s.header__container}>
                <p className={s.header__title}>UAH Currency Converter</p>
                <HeaderCurrency dataCurrency = {data} />
            </div>
        </header>
    );
};

export default Header;