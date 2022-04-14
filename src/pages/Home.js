import React from 'react'
import Banner from "../components/Banner"
import Rooms from "../components/Rooms"
import Header from "../components/Header"
import Filter from "../components/Filter"
import Footer from "../components/Footer"


const Home = () => {
  return (
    <div>
      <div className='header'>
        <Header />
        <Banner />
      </div>
      <Filter />
      <Rooms />
      <Footer />
    </div>
  )
}

export default Home