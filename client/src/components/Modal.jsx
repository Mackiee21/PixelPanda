import '../scss/modal.scss';

function Modal({ closeModal, currEl }) {
    return(
        <div className='modal-wrapper'>
            <div className='modal-background'>
                <button onClick={() => closeModal()}>Close Modal</button>
            </div>
            <div className="modal">
                <img src={currEl} alt="image" />
            </div>
        </div>
    );
}

export default Modal;