import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import Store from "./Store/Store"



//Components
import Header from "./Components/Hearder/Header"
import Home from "./Components/Home/Home"
import MovieDetail from "./Components/MovieDetail/MovieDetail"
import Footer from "./Components/Footer/Footer"
import PageNotfound from "./Components/PageNotfound/PageNotfound"


function App() {


  return (
    <div className="App">
      <Provider store={Store} >
        <Router>
          <Header/>
          <div className="flex justify-center items-center w-full">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/movie/:id" element={<MovieDetail />}></Route>
              <Route path="*" element={<PageNotfound />}></Route>
            </Routes>
          </div>

          <Footer/>

        </Router>

      </Provider>

     

    </div>
  )
}

export default App
