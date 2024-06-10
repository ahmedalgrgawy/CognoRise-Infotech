/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Drop } from "./Drop";
import { IoSwapHorizontal } from "react-icons/io5";

const Currency = () => {

    const [currencies, setCurrencies] = useState([])

    const [amount, setAmount] = useState(1)

    const [fromCurrency, setFromCurrency] = useState('USD')

    const [toCurrency, setToCurrency] = useState('AUD')

    const [convertedAmount, setConvertedAmount] = useState(null)

    const [converting, setConverting] = useState(false)

    //  https://api.frankfurter.app/currencies

    const fetchCurrencies = async () => {
        try {

            const res = await fetch('https://api.frankfurter.app/currencies')

            const data = await res.json()

            setCurrencies(Object.keys(data))

        } catch (error) {
            return error;
        }
    }

    useEffect(() => {
        fetchCurrencies()
    }, [])

    const convert = async () => {

        if (!amount) {
            return;
        } else {
            setConverting(true)
        }

        try {

            const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)

            const data = await res.json()

            setConvertedAmount(data.rates[toCurrency] + " " + toCurrency)

        } catch (error) {
            return error;
        } finally {
            setConverting(false)
        }
    }

    const swap = () => {
        setFromCurrency(toCurrency)
        setToCurrency(fromCurrency)
    }

    return (
        <div className="max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md">

            <h2 className="mb-5 text-2xl font-semibold text-gray-700">
                Currency Convertor
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                <Drop currencies={currencies} currency={fromCurrency} setCurrency={setFromCurrency} title="Form" />

                <div className="flex justify-center -mb-5 sm:mb-0">
                    <button onClick={swap} className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300">
                        <IoSwapHorizontal className="text-xl text-gray-700" />
                    </button>
                </div>

                <Drop currencies={currencies} currency={toCurrency} setCurrency={setToCurrency} title="To" />
            </div>

            <div>

                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="amount">Amount: </label>
                <input value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500" type="number" name="amount" id="" />
            </div>

            <div className="flex justify-end mt-6">
                <button onClick={convert} className={`px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${converting ? "animate-pulse" : ""} `}>
                    Convert
                </button>
            </div>

            {convertedAmount && (
                <div className="mt-4 text-lg font-medium text-right">
                    Converted Amount is <span className="text-green-600">{convertedAmount}</span>
                </div>
            )}

        </div>
    );
};

export default Currency;
