import './App.scss'
import Navbar from './assets/components/navbar/Navbar'
import Hero from './assets/containers/hero/Hero'
import WhyChoose from './assets/containers/whyChoose/WhyChoose'
import Features from './assets/containers/features/Features'
import Products from './assets/containers/products/Products'
import PopularProducts from './assets/containers/popularProducts/PopularProducts'
import GetStarted from './assets/containers/getStarted/GetStarted'
import ScrollTop from './assets/components/scrollTop/ScrollTop'
import Footer from './assets/containers/footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      
      <main>
        <Hero />
        <PopularProducts />
        <WhyChoose />
        <Features />
        <Products />
        <GetStarted />
      </main>

      <ScrollTop />
      <Footer />
    </>
  )
}

export default App
