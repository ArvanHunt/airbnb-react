import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
import Categories from "./components/Categories"; 
import Listings from "./components/Listings";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Navbar />
      <div className="mt-20">
        <Categories />
        <Listings />
        <Footer />
      </div>
    </div>
    </>
  )
}

export default App




