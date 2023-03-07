import "./contact.css";
import phone from "../../image/phone.png";
import email from "../../image/email.png";
import address from "../../image/address.png";
import { useRef } from "react";
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const formRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_nxmw49q', 
      'template_z9tnp3v', 
      formRef.current, 'TugBy0OrWMm5QSfF2'
    )
      .then((result) => {
        toast.success("Message Sent! Thank you..");
      }, (error) => {
        toast.error("Error! Resend message..");
        console.log(error.text);
      });
  }
  return (
    <div className="c" id="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img 
                src={phone}
                alt="" 
                className="c-icon" 
              />
              +91 934 5260 744
            </div>
            <div className="c-info-item">
              <img 
                src={email}
                alt="" 
                className="c-icon" 
              />
              logeshwaran200329@gmail.com
            </div>
            <div className="c-info-item">
              <img 
                src={address}
                alt="" 
                className="c-icon" 
              />
              Ganesh Garden, Kallanai road, Thiruverumbur, Trichy-18, India.
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Get in touch. Always available for freelancing if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={ handleSubmit }>
            <input type="text" placeholder="Name" name="user_name"/>
            <input type="text" name="user_subject" placeholder="Subject" />
            <input type="text" name="user_email" placeholder="Email" />
            <textarea name="message" cols="30" rows="5" placeholder="Message"></textarea>
            <button><span className="insideBtn">Send message</span><i class="fa-solid fa-arrow-right"></i></button>
          </form>
        </div>
      </div>
    </div>
  );
}
 
export default Contact;