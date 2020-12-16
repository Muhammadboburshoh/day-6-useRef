import './App.css';
import {useState} from "react"


function App() {
  
  const[lang, setLang] = useState(["Xush kelibsiz", "yaratuvchi kompaniya CompanyX"])
  
  return (
    <>
      <h1>{lang[0]}</h1>
      <select name="" id="" onChange={
        evt => {
          if (evt.target.value === "en"){
            setLang(["Welcome", "Devloped by company"])
          } else if(evt.target.value === "ru") {
            setLang(["Ruscha", "Men ruschani bilmayman"])
          }
          else {
            setLang(["Xush kelibsiz", "yaratuvchi kompaniya CompanyX"])
          }
        }
      }>
        <option value="uz">O'zbekcha</option>
        <option value="en">English</option>
        <option value="ru">Russian</option>
      </select>

      <p>{lang[1]}</p>
    </>
  )
}

export default App
