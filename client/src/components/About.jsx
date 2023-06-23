import '../scss/about.scss';
import { forwardRef, useEffect, useRef } from 'react';

function About(_, ref) {
    const logoRef = useRef(null);
    useEffect(() => {
       if(window.screen.width <= 360){
        Array.from(logoRef.current?.children).forEach(logo => {
            const i = logo.children[0];
            i.classList.replace("fa-xl", "fa-lg");
        })
       }
    }, [])
    return(
        <div ref={ref} className="about-wrapper" id="0">
            <div className="left-section">
                <div className='author-img'>
                    <img src="https://scontent.fceb1-2.fna.fbcdn.net/v/t39.30808-6/348436373_213259914852842_6357758812729540911_n.jpg?_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=174925&_nc_eui2=AeH60lnrXeDshehXAEKwLStxGvpQaazAut4a-lBprMC63jIwRFw0pA4wtS0Zf12wWl4QnDYNs6FGmNMOrrLK7tJT&_nc_ohc=omHdlp8f2MgAX8lfsfG&_nc_ht=scontent.fceb1-2.fna&oh=00_AfCVmHvEOiX9slTMyyCIemXVR_nkR9NNltC4v1HFTLltzw&oe=6499D030" alt="author image" />
                </div>
                <h3>Allan Pandac</h3>
                <h4>@PixelPanda</h4>
                <div className='social-logo' ref={logoRef}>
                    <a href='https://www.facebook.com/me.panda.07' target="_blank"><i className="fa-brands fa-facebook-square fa-xl" aria-hidden="true"></i></a>
                    <a href='https://www.instagram.com/allan_pandac/?fbclid=IwAR3zBcOFTsSK0Xczx__KaOGPI5or6yCgAMK3KM-Z3tKw_32ESAn3ooo9dNE' target="_blank"><i className="fa-brands fa-instagram fa-xl" aria-hidden="true"></i></a>
                    <a href='https://www.tiktok.com/@pandacallan' target="_blank"><i className="fa-brands fa-tiktok fa-xl" aria-hidden="true"></i></a>
                </div>
            </div>
            <div className="right-section">
                <h2>About Me</h2>
                <p>
                    Welcome to my mobile photography portfolio! 
                    I am thrilled to share with you my passion for capturing extraordinary 
                    moments using the power of smartphones. Through this website, I invite you 
                    to embark on a visual journey that showcases my unique perspective and love 
                    for the art of mobile photography.
                </p>
            </div>
        </div>
    );
}

export default forwardRef(About);