import React from 'react'
import Banner from "../components/Banner"
import Rooms from "../components/Rooms"
import Header from "../components/Header"
import Filter from "../components/Filter"

const Home = () => {
  return (
    <div>
      <div className='header'>
        <Header />
        <Banner />
      </div>
      <Filter />
      <Rooms />
    </div>
  )
}

export default Home