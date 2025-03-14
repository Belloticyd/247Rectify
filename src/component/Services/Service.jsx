

import "./Service.css"
import Services_Data  from "../../assets/data/services_data"
import arrow_icon from "../../assets/icons/arrow_icon.svg"

const Service = () => {
  return (
    // Below code is used to create the services div element
    <div className="services" id="service">
      {/* Below code is used to create the service title div element */}
      <div className="service-title">
        <h1>My Services</h1>
      </div>
      {/* Above code is used to End the service title div element */}
      {/* Start Here Below code is used to create a service-container div */}
      <div className="service-container">
        {/* Below code is used to import the service data to display using map method */}
        {Services_Data.map((service, index) => {
          return <div key={index} className="service-format">
            <h3>{service.s_no}</h3>
            <h1>{service.s_name}</h1>
            <p>{service.s_desc}</p>
            <div className="service-readMore">
              <p>Read More</p>
              <img src={arrow_icon} alt="" />
            </div>
          </div>
        })}
        {/* Above code is used to import the service data to display using map method */}
      </div>
      {/* End Here Above code is used to create a service-container div */}
    </div>
    // Below code is used to End the services div element
  )
}

export default Service
