import { Component } from 'react';
import Filter from '../filter/filter';
import './coffee-list.scss';

export default class CoffeeList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchText: '',
            filterText: ''
        }
    }

    getItems = (clbFunc, listLenght, showOrigin) => {
        return (
        this.props.data.filter(clbFunc).splice(0, listLenght).map((i, key) => 
            <div 
                key={key} 
                data-img={i.imgName}
                className='coffee-item'
                onClick={() => this.props.onCoffeeItemClick(i)}
            >
                <img 
                    className='item' 
                    src={require(`../../imgs/coffee/${i.imgName}.jpg`).default}  
                    alt="coffee" 
                />
                <p>{i.name}</p>
                {showOrigin ? <p className='right'>{i.origin}</p> : null}
                <p className='price right'>{i.price}$</p>
            </div>
        ))};

    getElems = (classNames, title, clbFunc, listLenght, showOrigin=false) => (
        <div className={classNames}>
            {title}
            <div className='coffee-list'>
                {this.getItems(clbFunc, listLenght, showOrigin)}
            </div>
        </div>
    );

    onSearch = (searchText) => {

        this.setState({
            searchText
        })        
     
    }

    onFilter = (filterText) => {

        this.setState({
            filterText
        })        
     
    }
    render () {
        const bar = <div className='line'></div>;

        let res = null;

        const {searchText, filterText} = this.state;
    
        switch (this.props.menuName) {
            case 'coffee-house' : 
                res = this.getElems('our-best', <h2>Our Best</h2>, (i) => i.best, 3);
                break;
    
            case 'our-coffee' : 
                const callBackFun = (i) => (i.name.toLowerCase().includes(searchText)) && (filterText === '' || i.origin === filterText);
                res = (<>   
                            {bar}
                            <Filter onSearch={this.onSearch} onFilter={this.onFilter}/> 
                            {this.getElems('all-list', null, callBackFun, 6, true)} 
                       </>);
                break;
    
            case 'for-your-plesure' : 
                res = (<>   
                            {bar}
                            {this.getElems('all-list', null, (i) => i, 6, true)} 
                       </>);
                break;
    
            default:
                res = null;
    
        }
    
        return (<> {res} </>)
    }

}
