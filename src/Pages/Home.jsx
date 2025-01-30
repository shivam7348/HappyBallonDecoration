import React from 'react'
import AutoSlider from '../components/AutoSlider';
import BalloonDecoration from '../components/BalloonDecoration';
import ServiceCards from '../components/ServiceCards';
import OurServicesCards from '../components/OurServicesCards';

function Home() {
  return (
    <>
      <AutoSlider />
      <ServiceCards />
      <BalloonDecoration />
      <OurServicesCards />
    </>
  );
}

export default Home