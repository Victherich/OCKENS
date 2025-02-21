import React from 'react'
import Hero from './Hero'
import Clients from './OurClients'
import AboutComponent from './AboutComponent'
import Hero2 from './Hero2'
import Hero3 from './Hero3'
import OurServices from './OurServices'
import OurCoreValues from './OurCoreValues'

const LandingPage = () => {
  return (
    <div>
      <Hero/>
      <AboutComponent/>
      <Hero2/>
      <OurServices/>
      <Hero3/>
      <OurCoreValues/>
      <Clients/>
    </div>
  )
}

export default LandingPage
