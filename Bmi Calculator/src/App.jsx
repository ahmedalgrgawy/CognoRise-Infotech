import { useState } from "react"
import healthy from "./imgs/healthy.png"
import underweight from './imgs/underweight.png'
import overweight from './imgs/overweight.png'

function App() {

  const [weight, setWight] = useState(0)

  const [hight, setHight] = useState(0)

  const [bmi, setBmi] = useState('')

  const [msg, setMsg] = useState('')

  const [stateImg, setImgState] = useState(null)


  let getBmi = (e) => {

    e.preventDefault()

    if (weight === 0 || hight === 0) {
      alert('Enter Valid Numbers')
    } else {

      let bmi = (weight / (hight * hight) * 703)

      console.log(weight);

      console.log(hight);

      console.log(bmi);

      setBmi(bmi.toFixed(1))

      if (bmi < 25) {
        setMsg('You Are Underweight')
        setImgState(underweight)
      } else if (bmi >= 25 && bmi < 30) {
        setMsg('You Are Normal')
        setImgState(healthy)
      } else {
        setMsg('You Are Overweight')
        setImgState(overweight)
      }

    }

  }

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-screen">

        <div className="rounded-lg p-4 shadow-lg">

          <h1 className="text-center font-bold text-2xl mb-5">Bmi Calculator</h1>

          <form onSubmit={getBmi} action="">
            <div>
              <label>Weight in Lbs</label>
              <input onChange={(e) => setWight(e.target.value)} className="w-full text-2xl py-2 px-1 rounded-lg border border-[#333]" type="number" value={weight} />
            </div>

            <div>
              <label>Hight in Inch</label>
              <input onChange={(e) => setHight(e.target.value)} className="w-full text-2xl py-2 px-1 rounded-lg border border-[#333]" type="number" value={hight} />
            </div>

            <div>
              <button className="btn" type="submit">Submit</button>
              <button onClick={() => window.location.reload()} className="btn bg-white text-[#333]">Reload</button>
            </div>

          </form>

          {bmi && (
            <div>

              <div className="text-center my-[24px] mx-0">
                <h2 className="text-center font-bold text-xl mb-5">Your Bmi is {bmi}</h2>
                <p className="my-3 mx-0">{msg}</p>
              </div>

              <div className="flex justify-center">
                <img className={stateImg ? "h-[140px] " : " "} src={stateImg} alt="" />
              </div>

            </div>
          )}

        </div>

      </div>
    </>
  )
}

export default App