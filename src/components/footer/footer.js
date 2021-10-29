import beans from '../../imgs/coffee-beans.svg';
import logo from '../../imgs/Beans logo.svg';

import './footer.scss';

const Footer = () => {
    return (<>
        <>
        <div>
            <button className='menu-item' name='coffee-house'>
                <img src={beans} alt="coffee-beans" />
                Coffee house
            </button>
            <button className='menu-item' name='our-coffee'>Our coffee</button>
            <button className='menu-item' name='for-your-plesure'>For your plesure</button>
        </div>
        <img src={logo} alt="coffee-beans" />
        </>
    </>);
}

export default Footer;