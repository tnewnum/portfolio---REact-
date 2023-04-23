import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPerson, faAt} from '@fortawesome/free-solid-svg-icons';


export default function Contact () {
    const contactRef = useRef(null);
  
    // declare state variables for email and name inputs
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
  
    // handle email input changes
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    // handle name input changes
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleMessageChange = (e) => {
      setMessage(e.target.value);
    };
    
    
      // handle form submission
      const handleSubmit = async (e) => {
        e.preventDefault();
  
        if (!email || !name || !message) {
          alert("Please fill in all the fields."); // show error message
          return;
        }
  
        try {
          // make POST request using fetch API
          const response = await fetch(
            "https://formsubmit.co/9a370d0d7b7478b6c787eb7394bc934e ",
            {
              method: "POST",
              body: new FormData(e.target),
            }
          );
          if (response.ok) {
            alert("Thank you for your message!"); // show success message
            window.location.reload(); // reload the page
          } else {
            alert("Oops! Something went wrong."); // show error message
          }
        } catch (error) {
          console.error(error);
          alert("Oops! Something went wrong  - Please email me at thomas.newnum@gmail.com"); // show error message
        }
      };
  
    return (
      <section id="contact" ref={contactRef} className=" d-flex justify-content-center row mt-5 p-0 ">
    <div className="col-lg-5 m-5">
      <div>
        <div className="text-center">
          <h2>
            <FontAwesomeIcon icon={faAt} style={{ color: "#000000" }} /> 
            Me
          </h2>
        </div>
          <form
              onSubmit={handleSubmit} // use onSubmit handler to handle form submission
              className="border border-2 rounded"
            >
          <input
            type="hidden"
            name="_subject"
            defaultValue="new email from portfolio"
          />
          <input type="hidden" name="_captcha" defaultValue="false" />
          <input
            type="hidden"
            name="_autoresponse"
            defaultValue="Hello - Thank you for your email. I will reach out as soon as possiable. In the meantime, be sure to check out my gitHub profile @ https://github.com/tnewnum - Have a bless day - Tommy "
          />
          <div className="m-4 input-group">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#000000" }} />  
            </span>
            <input
              type="email"
              name="email"
              className="form-control me-5"
              id="email"
              placeholder="name@example.com"
              value={email} // bind email state variable to input value
              onChange={handleEmailChange} // use onChange handler to handle email input changes
              required=""
            />
          </div>
          <div className="m-4 input-group">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faPerson} style={{ color: "#000000" }} />
            </span>
            <input
              type="name"
              className="form-control me-5"
              id="name"
              placeholder="Name"
              value={name} // bind name state variable to input value
              onChange={handleNameChange} // use onChange handler to handle name input changes
              required=""
            />
          </div>
          <div className="form-floating m-4">
            <textarea
              name="query"
              id="query"
              className="form-control"
              style={{ height: 140 }}
              value={message}
              onChange={handleMessageChange}
              required=""
            />
            <label htmlFor="query">Your Message:</label>
          </div>
          <div className="m-4 text-center">
            <button id="submit-btn" type="submit" className="btn btn-secondary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </section> 
 )};