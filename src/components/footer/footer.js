import logo from '../../imgs/beans-logo.svg';
import MainMenu from '../mainMenu/mainMenu';

import './footer.scss';

const Footer = () => {
    return (
        <div className='footer'>

            <MainMenu color={'black'}/>

            <img className='beans-footer' src={logo} alt="coffee-beans" />

        </div>
    );
}

export default Footer;
