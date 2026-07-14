
import './App.css'
import Navbar from './components/Navbar.jsx';
import Banner from './components/Banner.jsx';
import OurClass from './components/OurClass.jsx';
import About from './components/About.jsx';
import Price from './components/price.jsx';
import Testimonial from './components/Testimonial.jsx';
import Form from './components/Form.jsx';
import logo from './assets/logo.png'
import BannerImg from './assets/banner-img.png'
import DanceImg from './assets/img-2.png'
import DanceImg2 from './assets/img-1.png'
import AboutImg from './assets/about-img.png'
import ClientImg from './assets/client-img.png'
import Footer from './components/Footer.jsx';





function App() {
  let ClassHeading = "Our Classes";
  let AboutHeading = "About Our dance studio";


  return (
    <>
      <div className="header" >
        {/* navbar section starts here */}
        <Navbar Image={logo} />
        {/* navbar end  */}

        {/* bnner section starts from here  */}
        <Banner BannerImg={BannerImg} />
        {/* banner end  */}
      </div>

      {/* class section start  */}
      <OurClass DanceImg={DanceImg} DanceImg2={DanceImg2} ClassHeading={ClassHeading} className />
      {/* class section end  */}

      {/* about section  */}
      <About AboutHeading={AboutHeading} AboutImg={AboutImg} />
      {/* about end  */}

      {/* our price section  */}
      <Price />
      {/* our price end  */}

      {/* testimonial section  */}
      <Testimonial ClientImg={ClientImg} />
      {/* testimonial section end  */}
      <Form />
      {/* footer starts here  */}
      <Footer logo={logo}/>
      {/* footer end  */}
    </>
  )
}

export default App
