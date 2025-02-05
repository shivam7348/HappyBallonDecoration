import AutoSlider from '../components/AutoSlider';
import ServiceCards from '../components/ServiceCards';
import OurServicesCards from '../components/OurServicesCards';
import Form from "../Pages/FormComponent"
function Home() {
  return (
    <>
      <AutoSlider />
      <ServiceCards />
      {/* <BalloonDecoration /> */}
      <OurServicesCards />
      <Form />
    </>
  );
}

export default Home