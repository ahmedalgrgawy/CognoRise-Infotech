/* eslint-disable react/prop-types */
export const Drop = ({currencies, currency, setCurrency, title = ""}) => {

    return (
        <div>
            <label htmlFor={title}>{title}</label>

            <div className="mt-1 relative">
                <select value={currency} onChange={(e) => setCurrency(e.target.value)} className='my-3 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500' name="" id="">
                    {currencies?.map((currency) => {
                        return (
                            <option key={currency} value={currency}>{currency}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}
