import { useState, useCallback, useEffect, useRef } from "react"

function App() {
  const passwordRef = useRef(null)
  const [length, setLength] = useState(8)
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [charactersAllowed, setcharactersAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numbersAllowed) {
      str += "0123456789"
    }
    if (charactersAllowed) {
      str += "!@#$%^&*(){}[];:'>.<,/?~`-=_+"
    }
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }
    setPassword(pass)
  }
    , [length, numbersAllowed, charactersAllowed])

  const copyToClip = useCallback(()=>{
    passwordRef.current.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  }, [length,numbersAllowed,charactersAllowed,passwordGenerator])
  
  return (
    <div className="flex justify-center items-start pt-20 w-full h-screen bg-slate-950">
      <div className="bg-slate-700 py-5 w-2xl flex flex-col justify-center items-center px-10 rounded-2xl">
        <h1 className="text-5xl text-white py-5">Password Generator</h1>
        <div className="flex bg-white/70 rounded-full justify-between">
          <input type="text"
            className="outline-0 mx-5 w-lg text-slate-900"
            readOnly
            placeholder="Password"
            value={password}
            ref={passwordRef}
          />
          <button 
          className="text-white bg-slate-900 py-2 px-3 rounded-r-full cursor-pointer"
          onClick={copyToClip}
          >copy</button>
        </div>
        <div className="flex gap-5 mt-3">
          <div className="flex gap-2">
            <input className="accent-slate-900 outline-0" type="range" name="length" id="length" value={length} min={6} max={100} onChange={(e) => { setLength(e.target.value) }} />
            <label htmlFor="length" className="text-white">Length ({length})</label>
          </div>
          <div className="flex gap-2">
            <input className="accent-slate-900 outline-0" type="checkbox" name="number" id="number" onChange={() => { setNumbersAllowed((prev) => !prev) }} />
            <label htmlFor="number" className="text-white">Number</label>
          </div>
          <div className="flex gap-2">
            <input className="accent-slate-900 outline-0" type="checkbox" name="character" id="character" onChange={() => { setcharactersAllowed((prev) => !prev) }} />
            <label htmlFor="character" className="text-white">Character</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App