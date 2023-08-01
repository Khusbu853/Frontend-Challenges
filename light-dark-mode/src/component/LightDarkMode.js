import { useState } from "react"

const LightDarkMode = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false)

  return (
    <div className={"light " + (isDarkTheme && "dark")}>
        <h1  className={(isDarkTheme && "dark")}>Light Dark Mode</h1>
        <button onClick={() => setIsDarkTheme(!isDarkTheme)} className='font-bold border border-black px-4 bg-white text-black'>{isDarkTheme ? 'Light' : 'Dark'}</button>
    </div>
  )
}

export default LightDarkMode
