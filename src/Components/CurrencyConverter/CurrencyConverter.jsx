import React, {useEffect, useState} from 'react';
import CurrencyInput from "./CurrencyInput";
import s from './CurrencyConverter.module.css'

const CurrencyConverter = () => {

    const [rates,setRates] = useState([])

    const [currency1, setCurrency1] = useState()
    const [currency2, setCurrency2] = useState()

    const [rateCurrency1, setRateCurrency1] = useState({})
    const [rateCurrency2, setRateCurrency2] = useState({})

    const [amount1, setAmount1] = useState(1)
    const [amount2, setAmount2] = useState(1)

    useEffect(() => {
        fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`)
            .then((response) => response.json())
            .then(
                (json) => {
                    setRates(json)
                    setRateCurrency1(json[0])
                    setRateCurrency2(json[0])
                    setCurrency1(json[0].cc)
                    setCurrency2(json[0].cc)
                }
            )
    }, [])

    const toFixed = (number) => {
        return number.toFixed(4)
    }

    const handleAmount1Change = (amount1) => {
        setAmount2(toFixed(amount1 * rateCurrency1.rate / rateCurrency2.rate))
        setAmount1(amount1)
    }

    const handleAmount2Change = (amount2) => {
        setAmount1(toFixed(amount2 * rateCurrency2.rate / rateCurrency1.rate))
        setAmount2(amount2)
    }

    const handleCurrency1Change = (currency1) => {
        let newRate1 = rates.find(item => item.cc === currency1)
        setRateCurrency1(newRate1)
        setAmount2(toFixed(amount1 * newRate1.rate / rateCurrency2.rate))
        setCurrency1(currency1)
    }

    const handleCurrency2Change = (currency2) => {
        let newRate2 = rates.find(item => item.cc === currency2)
        setRateCurrency2(newRate2)
        setAmount1(toFixed(amount2 * rateCurrency1.rate / newRate2.rate))
        setCurrency2(currency2)
    }


    return (
        <div className= {s.currency__converter}>
            <div className={s.currency__converter__container}>
                <CurrencyInput
                    currencies = {rates}
                    amount = {amount1}
                    currency = {currency1}
                    onAmountChange = {handleAmount1Change}
                    onCurrencyChange = {handleCurrency1Change}
                />
                <CurrencyInput
                    currencies = {rates}
                    amount = {amount2}
                    currency = {currency2}
                    onAmountChange = {handleAmount2Change}
                    onCurrencyChange = {handleCurrency2Change}
                />
            </div>
        </div>
    );
};

export default CurrencyConverter;