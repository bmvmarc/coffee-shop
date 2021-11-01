import beansBlack from '../../imgs/coffee-beans-black.svg';
import beansWhite from '../../imgs/coffee-beans-white.svg';

import './mainMenu.scss';

const mainMenu = ({onMenuClick, color}) => {

    const classesBtns = 'main-menu-item main-menu-item-' + color;
    const beans = (color === 'white') ? beansWhite : beansBlack;

    return (<>

        <div className='main-menu'>

            <button 
                className={classesBtns} 
                name='coffee-house'
                onClick={onMenuClick}>
                    <img src={beans} alt="coffee-beans" />
                    Coffee house
            </button>

            <button 
                className={classesBtns} 
                name='our-coffee'
                onClick={onMenuClick}>
                    Our coffee
            </button>

            <button 
                className={classesBtns} 
                name='for-your-plesure'
                onClick={onMenuClick}>
                    For your plesure
            </button>

        </div>

    </>);
}


export default mainMenu;