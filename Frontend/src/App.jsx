import React from 'react'
import Gallery from '../src/components/functional/Gallery';
import Home from '../src/components/functional/Home';
import About from '../src/components/functional/About';
import Navbar from '../src/components/Navbar.jsx';
import Contact from '../src/components/functional/Contact.jsx';
import Login from './components/functional/Login.jsx';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
const App = () => {
  return (
      <main>
        {/* <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home properties="Hello" sjit="World"/> }  />
        </Routes>
        </BrowserRouter> */}
        <Navbar/>
        <Home properties="Hello" sjit="World" />
        <hr />
        <About/>
        <hr />
        <Contact/>
        <hr />
        <Login />
      </main>

  )
}

export default App