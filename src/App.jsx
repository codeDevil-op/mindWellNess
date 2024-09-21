import './App.css'
import AboutUs from './components/about/AboutUs'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Pricing from './components/pricing/Pricing'
import Services from './components/Services/Services'
import Testimonial from './components/testimonials/Testimonial'
import WorkingSteps from './components/working/WorkingSteps'

function App() {

  return (
    <>
    <div className='font-primary overflow-x-hidden'>
    <Navbar/>
    <Hero/>
    <Services/>
    <AboutUs/>
    <WorkingSteps/>
    <Pricing/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </div>
    </>
  )
}

export default App
