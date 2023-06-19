import '../scss/about.scss';

function About() {
    return(
        <div className="about-wrapper" id="0">
            <div className="left-section">
                <div className='author-img'>
                    <img src="https://scontent.fceb1-2.fna.fbcdn.net/v/t39.30808-6/348436373_213259914852842_6357758812729540911_n.jpg?_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH60lnrXeDshehXAEKwLStxGvpQaazAut4a-lBprMC63jIwRFw0pA4wtS0Zf12wWl4QnDYNs6FGmNMOrrLK7tJT&_nc_ohc=4CG7Ju-xwl8AX-8V8AY&_nc_ht=scontent.fceb1-2.fna&oh=00_AfBw2tdB3YV2kfI8R3tLv28xhREekxYM5Ih08bGnSQKFew&oe=6493E170" alt="author image" />
                </div>
                <h3>Allan Pandac</h3>
                <h4>pandacallan5@gmail.com</h4>
                <div className='social-logo'>
                    <a><i className="fa-brands fa-facebook-square fa-xl" aria-hidden="true"></i></a>
                    <a><i className="fa-brands fa-instagram fa-xl" aria-hidden="true"></i></a>
                    <a><i className="fa-brands fa-tiktok fa-xl" aria-hidden="true"></i></a>
                </div>
            </div>
            <div className="right-section">
                <p>
                    Welcome to the mobile photography portfolio of Allan Pandac! 
                    I am thrilled to share with you my passion for capturing extraordinary 
                    moments using the power of smartphones. Through this website, I invite you 
                    to embark on a visual journey that showcases my unique perspective and love 
                    for the art of mobile photography.
                </p>
            </div>
        </div>
    );
}

export default About;