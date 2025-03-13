

import "./Mywork.css"
import mywork_data from "../../assets/data/mywork_data"
import arrow_icon from "../../assets/icons/arrow_icon.svg"

const Mywork = () => {
  return (
    // Below code is used to create the mywork div element
    <div className="mywork" id="mywork">
      {/* Below code is used to create the Portiflio title div element */}
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>
      {/* Above code is used to End the Portiflio title div element */}

      {/* Start Here Below code is used to create a Mywork-container div */}
      <div className="mywork-container">
        {/* <div><a href="#"><img src="/public/images/Project1.jpg" alt="" /></a></div>
        <div><a href="#"><img src="/public/images/Project2.jpg" alt="" /></a></div>
        <div><a href="#"><img src="/public/images/Project3.jpg" alt="" /></a></div>
        <div><a href="#/"><img src="/public/images/Project4.jpg" alt="" /></a></div> */}
        {/* Below code is used to import the mywork data to display using map method */}
        {mywork_data.map((work, index) =>{
          return <img key={index} src={work.w_img} alt="" />
        })}
        {/* Above code is used to import the mywork data to display using map method */}
      </div>
      {/* End Here Below code is used to create a Mywork-container div */}
      <div className="showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
    // Above code is used to End the Mywork div element
  )
}

export default Mywork
