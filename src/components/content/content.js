import './content.scss';

import logo from '../../imgs/beans-logo.svg';

const Content = ({menuName, data}) => {

    const coffeeItems = data.filter(i => i.best).map(i => 
            <div className='coffee-item'>
                <img 
                    className='item' 
                    src={require(`../../imgs/coffee/${i.imgName}.jpg`).default}  
                    alt="coffee" />
                <p>{i.name}</p>
                <p className='price'>{i.price}$</p>
            </div>
        );

    return (
    <div className='content'>

        <div className='about-us'>

            <h2>About Us</h2>
            <img className='beans' src={logo} alt="coffee-beans" />
            <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.
            </p>
            <p>
                Now residence dashwoods she excellent you. Shade being under his bed her, Much
                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                horrible but confined day end marriage. Eagerness furniture set preserved far
                recommend. Did even but nor are most gave hope. Secure active living depend son
                repair day ladies now.
            </p>

        </div>

        <div className='our-best'>

            <h2>Our Best</h2>

            <div className='coffee-items'>
                {coffeeItems}
            </div>

        </div>

    </div>);
}

export default Content;