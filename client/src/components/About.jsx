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
                    <span>Hi, I am Allan Pandac</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    );
}

export default About;