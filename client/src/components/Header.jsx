import { forwardRef, useState, useRef } from 'react';
import logo from '../assets/logo.png';
import '../scss/header.scss';

const Header = forwardRef((props, ref) => {
    const hamburgerRef = useRef();
    const [navOpen, setNavOpen] = useState(false);
    const { activeLink } = props;
    const links = [
        {
            text: "About"
        },
        {
            text: "Gallery"
        },
        {
            text: "Contact"
        }
    ];
    const renderedLinks = links.map((link, index) => {
        return(
            <li key={index}>
                <a className={activeLink == index ? 'active': ""}>{link.text}</a></li>
        );
    });

    const showNavigation = () => {
        const hamburger = hamburgerRef.current;
        if(hamburger.classList.contains("fa-bars")){
            hamburger.classList.replace("fa-bars", "fa-close");
            setNavOpen(true);
        }else{
            hamburger.classList.replace("fa-close", "fa-bars");
            setNavOpen(false);
        }
    }
    //onsole.log(ref.current);
    // const isNavOpen = ref?.current.dataset.open === "true" ? true : false;
    if(navOpen){
        document.body.style.overflow = "hidden";
    }else{
        document.body.style.overflow = "auto";
    }
    return(
        <nav className='header'>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <ul className={navOpen ? "nav-open": ""} data-open="true" ref={ref}>
                {renderedLinks}
            </ul>
            <button onClick={showNavigation} className='hamburger'><i ref={hamburgerRef} className="fa-solid fa-bars fa-xl"></i></button>
        </nav>
    );

})

export default Header;