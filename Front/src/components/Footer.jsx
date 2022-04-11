import { Fragment } from 'react';
import '../Style/footer.css';
import home from '../images/home.svg';

const Footer = () => {

    return (
        <Fragment>
            <div className="footer">
            </div>
            <div className="footer-mobile">
                <div className='home'>
                    <img src={home} alt="home button" />
                </div>
                <div className="plus-btn">
                    <div className="round">
                        <div className='roundplus-btn'>
                            <span>+</span>
                        </div>
                    </div>
                </div>
                <div className="user">
                    <div className='image'></div>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer;