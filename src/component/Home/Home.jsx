
// import AnchorLink from "react-anchor-link-smooth-scroll"
import "./Home.css"
import heroImg from "/images/HeroImg.jpg"



const Home = () => {
  return (
    <div className="home" id="home">
      <div className="heroPage">
        <h1><span>Two Four Seven Rectify</span> Is the Easiest Way To Find Your Dream Place...</h1>
        <p>We are Network Venture, a carefully curated network of trusted local contractors offering expert home and office improvement services. Our team includes professionals across a wide range of fields, including painters, plumbers, carpenters, electricians, housekeepers, movers, general contractors, handymen, AC repair technicians, tillers, and much more! Each contractor is rigorously screened to ensure they are skilled, dependable, and professional—making them the reliable choice for your home or office needs.</p>
      </div>
      <img src={heroImg} alt="Landing Image" />
    </div>
  )
}

export default Home
