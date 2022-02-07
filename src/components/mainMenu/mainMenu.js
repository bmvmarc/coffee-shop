import { useContext } from 'react';
import beansBlack from '../../imgs/coffee-beans-black.svg';
import beansWhite from '../../imgs/coffee-beans-white.svg';
import MenuContext from '../context/MenuContext';

import './mainMenu.scss';

const MainMenu = ({color}) => {
    const {setMenuName} = useContext(MenuContext);

    const classesBtns = 'main-menu-item main-menu-item-' + color;
    const beans = (color === 'white') ? beansWhite : beansBlack;

    return (
        <div className='main-menu'>

            <button 
                className={classesBtns} 
                name='coffee-house'
                onClick={setMenuName}>
                    <img src={beans} alt="coffee-beans" />
                    Coffee house
            </button>

            <button 
                className={classesBtns} 
                name='our-coffee'
                onClick={setMenuName}>
                    Our coffee
            </button>

            <button 
                className={classesBtns} 
                name='for-your-plesure'
                onClick={setMenuName}>
                    For your plesure
            </button>

        </div>
    );
}

export default MainMenu;