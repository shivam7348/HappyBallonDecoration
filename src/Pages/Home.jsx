import React from 'react'
import AutoSlider from '../components/AutoSlider';
import BalloonDecoration from '../components/BalloonDecoration';
import ServiceCards from '../components/ServiceCards';
import OurServicesCards from '../components/OurServicesCards';
import Form from "../Pages/FormComponent"
import InputForm from '../components/InputForm';
function Home() {
  return (
    <>
      <AutoSlider />
      <ServiceCards />
      {/* <InputForm/> */}
      <BalloonDecoration />
      <OurServicesCards />
      <Form />
    </>
  );
}

export default Home