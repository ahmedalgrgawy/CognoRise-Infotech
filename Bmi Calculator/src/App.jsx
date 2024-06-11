import { useState } from "react"

function App() {

  const [weight, setWight] = useState(0)

  const [hight, setHight] = useState(0)

  const [bmi, setBmi] = useState("")

  const [msg, setMsg] = useState("")


  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-screen">

        <div className="rounded-lg p-4 shadow-lg">

          <h1 className="text-center font-bold text-2xl mb-5">Bmi Calculator</h1>

          <form action="">
            <div>
              <label>Weight in lbs</label>
              <input className="w-full text-2xl py-2 px-1 rounded-lg border border-[#333]" type="number" value={weight} />
            </div>

            <div>
              <label>Hight in inch</label>
              <input className="w-full text-2xl py-2 px-1 rounded-lg border border-[#333]" type="number" value={hight} />
            </div>

            <div>
              <button className="btn" type="submit">Submit</button>
              <button className="btn bg-white text-[#333]" type="submit">Reset</button>
            </div>

          </form>

          <div className="text-center my-[24px] mx-0">
            <h2 className="text-center font-bold text-xl mb-5">Your Bmi is {bmi}</h2>
            <p className="my-3 mx-0">{msg}</p>
          </div>

          <div className="text-center">
            <img className="h-[200px]" src={state} alt="" />
          </div>

        </div>

      </div>
    </>
  )
}

export default App
