import { useState } from 'react';
import Filter from '../filter/filter';
import './coffee-list.scss';

const CoffeeList = (props) => {

    const [searchText, setSearchText] = useState('');
    const [filterText, setFilterText] = useState('');

    const getItems = (clbFunc, listLenght, showOrigin) => {
        return (
        props.data.filter(clbFunc).splice(0, listLenght).map((i, key) => 
            <div 
                key={key} 
                data-img={i.imgName}
                className='coffee-item'
                onClick={() => props.onCoffeeItemClick(i)}>
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

    let res = null;

    switch (props.menuName) {
        case 'coffee-house' : 
            res = getElems('our-best', <h2>Our Best</h2>, (i) => i.best, 3);
            break;

        case 'our-coffee' : 
            const callBackFun = (i) => (i.name.toLowerCase().includes(searchText)) && (filterText === '' || i.origin === filterText);
            res = (<>   
                        {bar}
                        <Filter 
                            filterText={filterText}
                            searchText={searchText}
                            onSearch={txt => setSearchText(txt)} 
                            onFilter={txt => setFilterText(txt)}/> 
                        {getElems('all-list', null, callBackFun, 6, true)} 
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