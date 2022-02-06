import logo from '../../imgs/beans-logo.svg';
import girl from '../../imgs/girl.jpg';
import cup from '../../imgs/cup.jpg';

import './about.scss';

const About = ({menuName, coffeeItem}) => {

    const aboutUs = ( <>     
        <div className='about about-us'>

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
    </>); 

    const aboutOur = (imgName, articleName) => ( <>     
        <div className='about about-two-columns about-our-beans'>

            <div className='left-field'>
                <img className='girl' src={imgName} alt="girl" />
            </div>
            <div className='right-field'>
                <h2>{articleName}</h2>

                <img className='beans' src={logo} alt="coffee-beans" />

                <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    <br/><br/>
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    <br/>so questions. 
                    <br/>
                    As greatly removed calling pleased improve an. Last ask him cold feel
                    <br/>met spot shy want. Children me laughing we prospect answered followed. At it went
                    <br/>is song that held help face.
                </p>
            </div> 

        </div>    
    </>);

    const aboutItem = (coffeeItem) => ( <>     
        <div className='about about-two-columns about-coffe-item'>

            <div className='left-field'>
                <img className='girl' 
                    src={require(`../../imgs/coffee/${coffeeItem.imgName}.jpg`).default}
                    alt="coffee" />
            </div>
            <div className='right-field'>
                <h2>About it</h2>

                <img className='beans' src={logo} alt="coffee-beans" />

                <div className='paragraphs'>
                    <p><b>Country:</b> {coffeeItem.origin}</p>
                    <p><b>Description:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p><b>Price: </b> <span>{coffeeItem.price}$</span></p>
                </div> 
                
            </div> 

        </div>    
    </>);


    if (coffeeItem) {
        return <>{aboutItem(coffeeItem)}</>
    }

    let about = null;
    switch (menuName) {
        case 'coffee-house': 
            about = aboutUs;
            break;

        case 'our-coffee': 
            about = aboutOur(girl, 'About our beans');
            break; 
            
        case 'for-your-plesure': 
            about = aboutOur(cup, 'About our goods');
            break;             
            
        default: 
            break;
    }
    return (<>{about}</>);
    
}

export default About;