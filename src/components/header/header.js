import logoWhite from '../../imgs/beans-logo-white.svg';
import MainMenu from '../mainMenu/mainMenu';
import './header.scss';
import MenuContext from "../context/MenuContext";
import { useContext } from 'react';


const Header = () => {

    const {name: menuName} = useContext(MenuContext);

    const house = (
        <div className='header-main'>
            <MainMenu color={'white'}/>

            <h1>Everything You Love About Coffee</h1>
            
            <img className='beans-header' src={logoWhite} alt="coffee-beans" />

            <h2>We make  every day full of energy and taste</h2>
            <h2>Want to try our beans?</h2>
            
            <button className='more'>More</button>
        </div>);

    const coffee = (
        <div className='header'>
            <MainMenu color={'white'}/>
            <h1>Our Coffee</h1>
        </div>);

    const plesure = (
        <div className='header'>
            <MainMenu color={'white'}/>
            <h1>For your plesure</h1>
        </div>);

    let header = null;

    switch (menuName) {
        case 'coffee-house': 
            header = house;
            break;
 
        case 'our-coffee': 
            header = coffee;
            break; 
            
        case 'for-your-plesure': 
            header = plesure;
            break;             
            
        default: 
            break;
    }

    return (<>{header}</>);
}

export default Header;