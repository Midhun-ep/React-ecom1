
import { useState, useEffect } from 'react'
import './App.css'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import SideBar from './Sidebar/SideBar'
import Items from './Datas/Data'
import Card from './Components/Card'
import Footer from './footer/Footer'
import Aos from 'aos'
import "aos/dist/aos.css"
import Login from './login/Login'
import Banner from './banner/Banner'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {



  const [LoginPopup, setLoginPopup] = useState(false);
  const handleLoginPopup = () => {
    setLoginPopup(!LoginPopup);
  };

  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 90,
    });
    Aos.refresh();
  }, []);

  const [selectedCategory, setSelectedCategory] = useState(null)

  const [query, setQuery] = useState("");

  const handleinputChange = (event) => {
    setQuery(event.target.value);
  };
  const filteredItem = Items.filter((Items) => Items.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value)
  };

  function filteredData(Items, selected, query) {
    let filteredItems = Items

    // filtering input items

    if (query) {
      filteredItems = filteredItem
    }
    // selected filter
    if (selected) {
      filteredItems = filteredItems.filter(({ category, color, company, newPrice, title }) => category === selected || color === selected || company === selected || newPrice === selected || title === selected)
    }

    return filteredItems.map(({ img, title, star, reviews, prevPrice, newPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    ))
  }


  const result = filteredData(Items, selectedCategory, query)

  return (
    <>


      
          
          <Login LoginPopup={LoginPopup} setLoginPopup={setLoginPopup} />
          <Nav query={query} handleInputChange={handleinputChange} handleLoginPopup={handleLoginPopup} />
          
          <Banner />
          <Recommended handleClick={handleClick} />
          <SideBar handleChange={handleChange} />
          <Products result={result} />
          <Footer />
          
        




      {/* <div>
        <h1 className='text-center capitalize '>hello</h1>
      </div> */}
    </>
  )
}

export default App
