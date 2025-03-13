

import "./Footer.css"
import user_icon from "../../assets/icons/user_icon.svg"

const Footer = () => {
  return (
    // Below code is used to create the footer div element
    <div className="footer" id="footer">
      {/* STart of Footer top */}
      <div className="footer-top">
        <div className="top-left">
        <h1>Two Four Seven Rectify</h1>
          <p>Is a Home and Offices developer from Lagos State, Nigeria with Eight (8) years and six (6) months of exprience in various homes and companies...</p>
        </div>
        <div className="top-right">
          <div className="footer-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <button className="subsrcibe">subscribe</button>
        </div>
      </div>
      <hr />
      {/* End of Footer top */}
      <div className="footer-bottom">
        <p className="bottom-left">&copy; 2017 Two Four Seven Rectify. All right reserved</p>
        <div className="bottom-right">
          <p>Term of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
      <p>Website Develop by Belloticyd</p>
    </div>
    // Above code is used to create the footer div element
  )
}

export default Footer
