import '../scss/pageHeader.scss';

function PageHeader({ pageHeaderInfo }) {
    const { link, text} = pageHeaderInfo;
    return(
        <div className='title-wrapper'>
                <div className="title-img">
                    <img src={link} alt="author image" />
                </div>
                <h3>{text}</h3>
            </div>
    );
}

export default PageHeader;