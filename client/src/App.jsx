import Header from './components/Header';
import About from './components/About';
import Photos from './components/Photos';
import Contact from './components/Contact';
import './scss/app.scss';
import { useEffect, useRef, useState, createContext } from 'react';

const MainRefContext = createContext();

function App() {
    const contentRef = useRef();
    const galleryRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const contextValues = {
        galleryRef,
        aboutRef,
        contactRef
    }
    const [activeLink, setActiveLink] = useState(0);

    let option = {
        rootMargin: "-150px"
    }
    if(window.screen.width <= 600){
        option = {
            rootMargin: "-50px"
        }
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
        <MainRefContext.Provider value={contextValues}>
            <div>
                <Header activeLink={activeLink} />
                    <main ref={contentRef}>
                        <About ref={aboutRef} />
                        <Photos ref={galleryRef} />
                        <Contact ref={contactRef} />
                    </main>
            </div>
        </MainRefContext.Provider>
    );

}

export default App;
export { MainRefContext }