import PageHeader from "./pageHeader";
import { createPortal } from 'react-dom';
import Modal from './Modal';
import { useEffect, useRef, forwardRef } from 'react';
import '../scss/photos.scss';
import photo1 from '../assets/Web/chosen1.jpg';
import photo2 from '../assets/Web/chosen2.jpg';
import photo3 from '../assets/Web/chosen3.jpg';
import photo4 from '../assets/Web/chosen4.jpg';
import photo5 from '../assets/Web/chosen5.jpg';
import photo6 from '../assets/Web/chosen6.jpg';
import photobongbong from '../assets/Web/lastnajd.jpg';
import photo8 from '../assets/Web/lastchosen.jpg';
import photo9 from '../assets/Web/chosen9.jpg';


function Photos(_, ref) {
    const imageRef = useRef(null);
    // const { galleryContext } = useMainRefContext();
    // const [showModal, setShowModal] = useState(false);
    // const [currEl, setCurrEl] = useState(null);

    const pageHeaderInfo = {
        link: "https://scontent.fceb1-2.fna.fbcdn.net/v/t39.30808-6/348436373_213259914852842_6357758812729540911_n.jpg?_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=174925&_nc_eui2=AeH60lnrXeDshehXAEKwLStxGvpQaazAut4a-lBprMC63jIwRFw0pA4wtS0Zf12wWl4QnDYNs6FGmNMOrrLK7tJT&_nc_ohc=omHdlp8f2MgAX8lfsfG&_nc_ht=scontent.fceb1-2.fna&oh=00_AfCVmHvEOiX9slTMyyCIemXVR_nkR9NNltC4v1HFTLltzw&oe=6499D030",
        text: "Gallery"
    }
    const cards = [photo1, photo2, photo3, photo4, photo5, photo6, photobongbong, photo8, photo9];

    const handleClickCard = (index) => {
        //document.body.style.overflowY = "hidden";
        setCurrEl(cards[index]);
        setShowModal(true);
    }

    useEffect(() => {
        const divs = imageRef.current.children;
        Array.from(divs).forEach(div => {
            const img = div.querySelector("img");

            function loaded() {
                div.classList.add("loaded");
            }
            if(img.complete){
                loaded();
            }else{
                img.addEventListener("load", loaded)
            }
        })
    }, []);

    // const closeModal = () => {
    //     document.body.style.overflowY = "scroll";
    //     setCurrEl(null);
    //     setShowModal(false);
    // }
    const images = cards.map((photo, index) => {
        return(<div key={index} className="card" onClick={() => handleClickCard(index)}>
                    <div className="image">
                        <img loading="lazy" src={photo} alt="image" />
                    </div>
                    {/* <div className="content">
                    <p>{card.content?.name}</p>
                    <p>{card.content?.location}</p>
                    </div> */}
                </div>
            );
    })
    return(
        <div ref={ref} className="wrapper" id="1">
            <PageHeader pageHeaderInfo={pageHeaderInfo} />
           <div className="grid" ref={imageRef}>
            { images }
           </div>
           <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.pexels.com%2F%40pixelpanda-1386402%2F%3Fnc%3D%26fbclid%3DIwAR0H_24xSRCxXcRy7-CRb16vrAha_GUVpkh3uMbnCeoGafYNtN5QGK631iU&h=AT0y6o-3Wx-R-I6t7UCHpbdOSknAE-9_3iienpdwNX-i90w3jo4i8Gyn0MZrTpWOTuyBlJ-Y76JF-3ZhAWiwSQZLEh9tVlvet0PPgmlVZS8tnHY8n8aBjcQ0QsU0cvxa4iwEswDSseDdHUWoSOE7gA" target="_blank" className="link">View More <i className="fa-solid fa-arrow-right"></i></a>
           {/* { showModal && createPortal(
                <Modal closeModal={closeModal} currEl={currEl}/>,
                document.body.querySelector(".modal-container")
            )} */}
        </div>
    );

}

export default forwardRef(Photos);