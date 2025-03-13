

import {useState} from 'react'
import "./Contact.css"
import mailIcon from "../../assets/icons/mail_icon.svg"
import callIcon from "../../assets/icons/call_icon.svg"
import locationIcon from "../../assets/icons/location_icon.svg"
import theme_pattern from "../../assets/icons/Theme_Patterns.png"

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cdcd7a73-59ba-4933-a158-bdabbe122ad6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  return (
    // Below code is used to create a Contact Div Element
    // Contact Div Element Start Here
    <div className="contact" id="contact">
      {/* Contact div Element Title Start Here */}
      <div className="contactTitle">
        <h1 className="title">Get in Touch With Us</h1>
        <img src={theme_pattern} alt="Underline Patterns" />
      </div>
      {/* Contact div Element Title End Here */}

      {/* ContactSection Start Here */}
      <div className="contactSection">
        {/* contactSection is divided by 2 div Element */}
        {/* leftContactSection Start Here */}
        <div className="leftContactSection">
            <h1>Let`s Talk</h1>
            <p>I`m currently avaliable to take a new project, so feel free to send me a message about anything that you want me to work on for you, You can contact me anytime and anyday</p>

            {/* Below code is the contactDetails div */}
            <div className="contactDetails">
                <div className="contactDetail">
                  <img src={mailIcon} alt="E-mail Icons" />
                  <p>oguntolataofik@gmail.com</p>
                </div>
                <div className="contactDetail">
                  <a href="tel:+2348120332227">
                    <img src={callIcon} alt="Call Icons" />
                    <p>+2348120332227</p>
                  </a>
                </div>
                <div className="contactDetail">
                  <img src={locationIcon} alt="Location Icons" />
                  <p>33, Adeboye Street, Akoka, Bariga, Lagos, Nigeria</p>
                </div>
            </div>
        </div>
        {/* leftContactSection End Here */}

        {/* rightContactSection Start Here */}
        <div className="rightContactSection">
        <form onSubmit={onSubmit} className="contact-form">
            <label htmlFor=""className="message" value={result} onChange={(e)=>setResult(e.target.value)}>{result}</label>
            <label htmlFor="">Your Names</label>
            <input type="text" name="name" id="" placeholder="Please Enter Your Names" required />
            <label htmlFor="">Your Email Address</label>
            <input type="email" name="email" id="" placeholder="Please Enter Your Emaill Address" required />
            <label htmlFor="">Write your message Here</label>
            <textarea name="message" rows={10} placeholder="Please Enter Your Message" required></textarea>
            <button type="submit" className="contact-submit">Submit Now</button>
          </form>
        </div>
        {/* rightContactSection End Here */}

      </div>
      {/* ContactSection End Here */}


    </div>
    // Contact Div Element End Here
  )
}

export default Contact
