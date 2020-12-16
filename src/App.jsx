import './App.css';
import {useRef} from "react"


function App() {
  
  const htmlElementRef = useRef("")

  console.log(htmlElementRef.current.value)

  const check = () => {
    if(htmlElementRef.current.value.length < 6 ) {
      htmlElementRef.current.classList.add("border-red")
    }
    else if(htmlElementRef.current.value.length === 6) {
      htmlElementRef.current.classList.remove("border-red")
      htmlElementRef.current.classList.add("border")
    }
    else{
      htmlElementRef.current.classList.add("border-red")
    }
  }
  return (
    <>
      <input onChange={check} className="input-style" ref={htmlElementRef} type="text"/>
    </>
  )
}

export default App
