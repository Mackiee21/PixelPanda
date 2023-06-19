import Header from './components/Header';
import About from './components/About';
import Photos from './components/Photos';
import Contact from './components/Contact';
import './scss/app.scss';
import { useEffect, useRef, useState } from 'react';
function App() {
    const contentRef = useRef();
    const navRef = useRef();
    const [activeLink, setActiveLink] = useState(0);

    let option = {
        rootMargin: "-150px"
    }
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    //console.log('title-wrapper: ', entry)
                    //console.log(entry.target.id)
                    entry.target.classList.add("animate");
                    setActiveLink(entry.target.id);
                }else{
                    entry.target.classList.remove("animate");
                }
            })
        }, option);
        if(contentRef.current){
            //console.log(contentRef.current.children);
            const elements = contentRef.current.children;

            Array.from(elements).forEach(element => {
                observer.observe(element);
            })
        }
        return () => {
            if(contentRef.current){
                Array.from(elements).forEach(element => {
                    observer.unobserve(element);
                })
            }
        }
    }, [])
    return(
        <div>
            <Header ref={navRef} activeLink={activeLink} />
            <main ref={contentRef}>
                <About />
                <Photos />
                <Contact />
            </main>
        </div>
    );

}

export default App;