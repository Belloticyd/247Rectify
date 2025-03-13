
// import AnchorLink from "react-anchor-link-smooth-scroll"
import "./Home.css"
import heroImg from "/images/HeroImg.jpg"



const Home = () => {
  return (
    <div className="home" id="home">
      <div className="heroPage">
        <h1><span>Two Four Seven Rectify</span> Is the Easiest Way To Find Your Dream Place...</h1>
        <p>We are network venture as it is a pre-screened network of local home/office improvement contractors ranging from Painters, Plumbers, Carpenters, Electricians, House Keepers, Relocators, General Contractors, Handymen, AC repairs, Media and Photography, Bouncer and Tiller More! Each of these contractors has been carefully screened to ensure that they are skilled, professionals and someone you can trust in your homes and offices.</p>
      </div>
      <img src={heroImg} alt="Landing Image" />
    </div>
  )
}

export default Home
