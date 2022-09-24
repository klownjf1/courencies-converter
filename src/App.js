import s from './App.module.css';
import CurrencyConverter from "./Components/CurrencyConverter/CurrencyConverter";
import Header from "./Components/Header/Header";

function App() {

    return (
        <div className={s.App}>

            <Header/>
            <CurrencyConverter/>
        </div>
    );

}
export default App;
