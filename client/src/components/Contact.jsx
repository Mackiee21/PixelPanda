import PageHeader from './pageHeader';
import '../scss/contact.scss';
import { useState, forwardRef } from 'react';

function Contact(_, ref) {
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const submitMessage = (e) => {
        e.preventDefault();
        //just in case makalimot ka mak, matawag japon ang function sa ubos once e enter sa user
        //ang email input field
    }

    const handleSubmit = (e) => {
        if(emailRegex.test(email)){
            if(message.trim() && email.trim()){
                e.preventDefault();
                const messageType = e.target.innerText.toLowerCase();
                let subject = messageType === "send as message" ? "Personal Message" : "User Feedback";
                // console.log(emailRef.current.value)
                subject += ` FROM: ${email}`;
                Email.send({
                    Host: "smtp.elasticemail.com",
                    Username : "pandacmark21@gmail.com",
                    Password : "08F5ACA89840549688760FE40842C0046706",
                    To : "pandacallan5@gmail.com",
                    From : "pandacmark21@gmail.com",
                    Subject : subject,
                    Body : message
                }).then(
                  message => {
                    if(message === "OK"){
                        alert("Message Sent!");
                        setMessage("");
                        setEmail("");
                    }else{
                        alert(message)
                    }
                  }
                );
            }
        }
    }

    const handleChange = (e) => {
        setMessage(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const pageHeaderInfo = {
        link: "https://scontent.fceb1-2.fna.fbcdn.net/v/t39.30808-6/348436373_213259914852842_6357758812729540911_n.jpg?_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH60lnrXeDshehXAEKwLStxGvpQaazAut4a-lBprMC63jIwRFw0pA4wtS0Zf12wWl4QnDYNs6FGmNMOrrLK7tJT&_nc_ohc=4CG7Ju-xwl8AX-8V8AY&_nc_ht=scontent.fceb1-2.fna&oh=00_AfBw2tdB3YV2kfI8R3tLv28xhREekxYM5Ih08bGnSQKFew&oe=6493E170",
        text: "Contact"
    }
    return(
        <div ref={ref} className="contact-wrapper" id="2">
            <PageHeader pageHeaderInfo={pageHeaderInfo}  />
            <form onSubmit={submitMessage}>
                <h2>Send me a message</h2>
                <textarea onChange={handleChange} value={message} placeholder='Write your message here...' required></textarea>
                <div className='input-wrapper'>
                    <label htmlFor="input">Your Email</label>
                    <input onChange={handleEmailChange} value={email} className='input' id='input' type="email"  required />
                    <div className='note'>
                        <p> Note: <span><i className="fa-regular fa-circle-xmark"></i></span>Please specify a correct and valid email as the sender. The sent email will also not be 
                            put on your sent box. 
                        </p>
                    </div>
                </div>
                <div className='form-btn-wrapper'>
                    <button onClick={handleSubmit}>Send as Message</button>
                    <button onClick={handleSubmit}>Send as feedback</button>
                </div>
            </form>
            <footer>
                <div className='left-footer'>
                    <div className='footer-info'>
                        <a><i className="fa-solid fa-copyright fa-lg"></i>Mark Anthony Pandac</a>
                        <p><i className="fa-solid fa-time fa-lg"></i>June 19, 2023</p>
                    </div>
                    <div className="social-icons">
                        <a href='https://www.facebook.com/profile.php?id=100004799718154' target="_blank"><i className="fa-brands fa-facebook-square fa-xl"></i></a>
                        <a href='https://www.instagram.com/mackiee_21/?igshid=NGExMmI2YTkyZg%3D%3D' target="_blank"><i className="fa-brands fa-instagram fa-xl"></i></a>
                    </div>
                </div>
                <div className="middle-footer">
                    <p>All rights reserved</p>
                </div>
                <div className="right-footer">
                    <div className="footer-info">
                        <a><i className="fa-solid fa-copyright fa-lg"></i>PixelPanda</a>
                        <p>No Copyright Infringement</p>
                    </div>
                    <div className="social-icons">
                        <a href='https://www.facebook.com/me.panda.07' target="_blank"><i className="fa-brands fa-facebook-square fa-xl" aria-hidden="true"></i></a>
                        <a href='https://www.instagram.com/allan_pandac/?fbclid=IwAR3zBcOFTsSK0Xczx__KaOGPI5or6yCgAMK3KM-Z3tKw_32ESAn3ooo9dNE' target="_blank"><i className="fa-brands fa-instagram fa-xl" aria-hidden="true"></i></a>
                        <a href='https://www.tiktok.com/@pandacallan' target="_blank"><i className="fa-brands fa-tiktok fa-xl" aria-hidden="true"></i></a>
                    </div>
                    
                </div>
            </footer>
        </div>
    );

}

export default forwardRef(Contact);