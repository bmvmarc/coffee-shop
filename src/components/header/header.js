import logoWhite from '../../imgs/beans-logo-white.svg';
import MainMenu from '../mainMenu/mainMenu';
import './header.scss';

const Header = ({onMenuClick, menuName}) => {


    const house = (<>
        <MainMenu onMenuClick={onMenuClick} color={'white'}/>

        <h1>Everything You Love About Coffee</h1>
        
        <img className='beans-header' src={logoWhite} alt="coffee-beans" />

        <h2>We makes every day full of energy and taste</h2>
        <h2>Want to try our beans?</h2>
        
        <button className='more'>More</button>
    </>);

    const coffee = (<>
        <MainMenu onMenuClick={onMenuClick} color={'white'}/>
        <h1>Our Coffee</h1>
    </>);

    const plesure = (<>
        <MainMenu onMenuClick={onMenuClick} color={'white'}/>
        <h1>For your plesure</h1>
    </>);

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

    return (<>
        <div className='header'>
           
            {header}

        </div>

    </>);
}

export default Header;