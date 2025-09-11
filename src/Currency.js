import React, { useState } from "react";

export default function Currency() {
    const [fromData, setFromData] = useState('USD')
    const [toData, setToData] = useState('INR')
    const [amount, setAmount] = useState(1)
    const [result, setResult] = useState()

    async function convert() {
        const from_data = document.form.from.value;
        const to_data = document.form.to.value;
        const amount = document.form.amount.value;

        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from_data}`);
        const data = await response.json();

        const rate = data.rates[to_data];
        const new_amount = (rate * amount).toFixed(2);
        setResult(`${amount} ${from_data} =${new_amount} ${to_data}`);


    }
    return (
        <div className="main">
            <h1>Currency Converter</h1>
            <form name="form">
                <input type="number" name="amount" value={amount} onChange={(e) => { setAmount(e.target.value) }} />
                <select name="from" onChange={(e) => { setFromData(e.target.value) }} value={fromData}>

                    <option value="USD">USD</option>
                    <option value="INR">INR</option>
                    <option value="AED">AED</option>
                </select>

                <select name="to" onChange={(e) => { setToData(e.target.value) }} value={toData}>

                    <option value="USD">USD</option>
                    <option value="INR">INR</option>
                    <option value="AED">AED</option>
                </select>

                <input type="button" value="Convert" onClick={convert} />
            </form>
            <h1 id="result">{result}</h1>
        </div>
    )
}