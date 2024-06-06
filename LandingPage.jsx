import React from 'react'
// Sections
import Navbar from "../components/sections/Navbar";
import IntroSection from "../components/sections/IntroSection";
import Sectiontwo from '../components/sections/Sectiontwo';
import Fourpoints from '../components/sections/Fourpoints';
import FaqSection from '../components/sections/FaqSection';
import Footer from '../components/sections/Footer';
// import Privacypolicy from '../components/sections/Privacypolicy';



const LandingPage=() => {
  return (
    <>
      <Navbar/>
      <IntroSection/>

      <Sectiontwo/>

      <Fourpoints/>
      
      

      <FaqSection/>

      <Footer/>
      {/* <Privacypolicy/> */}


    </>
  )
}

export default LandingPage;
