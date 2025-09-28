import React from 'react'
import Hero from '../Components/Hero'
import SimpleSlider from '../Components/SimpleSlider'
import Fashion from '../Components/Fashion'
import Banner from '../Components/Banner'
import Recommended from '../Components/Recommended'
import FashionPart from '../Components/FashionPart'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Hero/>
      <SimpleSlider/>
      <Recommended/>
      <FashionPart/>
      <Fashion/>
    </div>
  )
}

export default Home