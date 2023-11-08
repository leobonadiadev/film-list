import { Routes, Route } from "react-router-dom"
import Header from './assets/components/Header/Header.jsx'
import Home from "./assets/views/Home/Home.jsx"
import MovieDetail from "./assets/views/MovieDetail/MovieDetail.jsx"
import { useState } from "react"

function App() {

  const [searchValue, setSearchValue] = useState("")


  return (
    <>
      <div>
        <Header onSubmit={(inputValue) => setSearchValue(inputValue)}/>
        <Routes>
          <Route path="/" element={<Home searchValueProp={searchValue}/>}/>
          <Route path="/movie/:id" element={<MovieDetail searchValueProp={searchValue} />} />
        </Routes>
      </div>
      
    </>
  )
}

export default App
