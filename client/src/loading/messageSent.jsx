import { createPortal } from 'react-dom';
import '../scss/loading/messageSent.scss';
function MessageSent() {
    return createPortal(
        <div className='loading-wrapper-sent'>
            <div className='modal'>
                <p>Message Sent <span><i className="fa-solid fa-circle-check fa-beat"></i></span></p>
            </div>
        </div>,
        document.querySelector(".modal-container")
    );
}

function MessageSending() {
    return createPortal(
        <div className='loading-wrapper-sending'>
            <div className='modal'>
                <p>Sending <span><i className="fa-solid fa-circle-notch fa-spin"></i></span></p>
            </div>
        </div>,
        document.querySelector(".modal-container")
    );
}

export { MessageSent };
export { MessageSending }