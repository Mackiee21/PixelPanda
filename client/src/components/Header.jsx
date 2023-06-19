import { forwardRef } from 'react';
import logo from '../assets/logo.png';
import '../scss/header.scss';

const Header = forwardRef((props, ref) => {
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
    })
    return(
        <nav className='header'>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <ul ref={ref}>
                {renderedLinks}
            </ul>
            <button className='hamburger'><i className="fa-solid fa-bars fa-xl"></i></button>
        </nav>
    );

})

export default Header;