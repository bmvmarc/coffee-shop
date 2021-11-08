import './coffee-list.scss';

const CoffeeList = ({menuName, data}) => {

    const getItems = (clbFunc, listLenght, showOrigin) => {
        return (
        data.filter(clbFunc).splice(0, listLenght).map((i, key) => 
            <div key={key} className='coffee-item'>
                <img 
                    className='item' 
                    src={require(`../../imgs/coffee/${i.imgName}.jpg`).default}  
                    alt="coffee" />
                <p>{i.name}</p>
                {showOrigin ? <p className='right'>{i.origin}</p> : null}
                <p className='price right'>{i.price}$</p>
            </div>
        ))};

    const getElems = (classNames, title, clbFunc, listLenght, showOrigin=false) => (
        <div className={classNames}>
            {title}
            <div className='coffee-list'>
                {getItems(clbFunc, listLenght, showOrigin)}
            </div>
        </div>
    );

    const bar = <div className='line'></div>;
    const filter = null;

    let  res = null;

    switch (menuName) {
        case 'coffee-house' : 
            res = getElems('our-best', <h2>Our Best</h2>, (i) => i.best, 3);
            break;

        case 'our-coffee' : 
            res = (<>   
                        {bar}
                        {filter} 
                        {getElems('all-list', null, (i) => i, 6, true)} 
                   </>);
            break;

        case 'for-your-plesure' : 
            res = (<>   
                        {bar}
                        {getElems('all-list', null, (i) => i, 6, true)} 
                   </>);
            break;

        default:
            res = null;

    }

    return (<> {res} </>)
}

export default CoffeeList;