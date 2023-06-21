import {useState, useRef  } from 'react';
import logo from '../assets/logo.png';
import '../scss/header.scss';
import useMainRefContext from '../customHooks/useMainRefContext';

function Header(props) {
    const { galleryRef, aboutRef, contactRef } = useMainRefContext();
    const hamburgerRef = useRef(null);
    //const { galleryRef } = props;
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

    const handleClick = (e) => {
        //close the menu and replace the button type
        setNavOpen(false)
        hamburgerRef.current.classList.replace("fa-close", "fa-bars");

        //scroll to specified element
        const target = e.target.innerText;
        switch(target){
            case 'About':
                aboutRef.current?.scrollIntoView({behavior: 'smooth'});
            break;
            case 'Gallery':
                setTimeout(() => {
                    galleryRef.current?.scrollIntoView({ behavior: 'smooth'});
                }, 30)
            break;
            case 'Contact':
                contactRef.current?.scrollIntoView({behavior: 'smooth'});
            break;
            default: alert("invalid")
        }
    }

    const renderedLinks = links.map((link, index) => {
        return(
            <li onClick={handleClick} key={index}>
                <a className={activeLink == index ? 'active': ""}>{link.text}</a></li>
        );
    });

    const showNavigation = () => {
        const hamburger = hamburgerRef.current;
        if(!navOpen){
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
            <ul className={navOpen ? "nav-open": ""} data-open="true">
                {renderedLinks}
            </ul>
            <button onClick={showNavigation} className='hamburger'><i ref={hamburgerRef} className="fa-solid fa-bars fa-xl"></i></button>
        </nav>
    );

}

export default Header;