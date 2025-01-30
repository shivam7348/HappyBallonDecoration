import React from 'react'
import DateTimeDisplay from './Topheader/Topheader'
import Header from './Topheader/Topheader'
import MainHeader from './Topheader/MainHeader'
import AutoSlider from './components/AutoSlider';
import ServiceCards from './components/ServiceCards';
import BalloonDecoration from './components/BalloonDecoration';
import OurServicesCards from './components/OurServicesCards';
function App() {
  return (
    <>
      <Header />
      <MainHeader />
      <AutoSlider />
      <ServiceCards />
      <BalloonDecoration />
      <OurServicesCards />
    </>
  );
}

export default App