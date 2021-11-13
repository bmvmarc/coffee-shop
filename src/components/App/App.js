import Footer from "../footer/footer";
import Header from "../header/header";
import { Component } from "react";

import About from '../about/about';
import CoffeeList from '../coffee-list/coffee-list';

import './app.scss';

export default class App extends Component{

  constructor (props) {
    super(props);
    this.state = {
      menu: 'coffee-house',
      data: [
            {name: 'Solimo Coffee Beans 2 kg', origin: 'Brazil',   price: 10.73, imgName: '1', best: true}, 
            {name: 'Presto Coffee Beans 1 kg', origin: 'Kenya',    price: 15.99, imgName: '2', best: true}, 
            {name: 'AROMISTICO Coffee 1 kg',   origin: 'Columbia', price: 6.99,  imgName: '3', best: true},
            {name: 'AROMISTICO Coffee 1 kg B', origin: 'Brazil',   price: 10.73, imgName: '3', best: false}, 
            {name: 'AROMISTICO Coffee 1 kg K', origin: 'Kenya',    price: 15.99, imgName: '4', best: true}, 
            {name: 'AROMISTICO Coffee 1 kg C', origin: 'Columbia', price: 6.99,  imgName: '3', best: false}            
      ],
      coffeeItem: null
    }
  }

  onMenuClick = (e) => {
    e.preventDefault();
    this.setState({
      menu: e.target.name, 
      coffeeItem: null
    });
  }

  onCoffeeItemClick = (item) => {
    this.setState({
        coffeeItem: item
    });
  }

  render () {

    const {menu, coffeeItem, data} = this.state;

    return (
      <div className="App">
       
        <Header 
          onMenuClick={this.onMenuClick}
          menuName={menu}/>

        <div className='content'> 
            <About menuName={menu} coffeeItem={coffeeItem}/>
            {coffeeItem ? null : 
              <CoffeeList 
                  menuName={menu} 
                  data={data} 
                  onCoffeeItemClick={this.onCoffeeItemClick}
              />
            }
        </div>

        <Footer 
          onMenuClick={this.onMenuClick}/>

      </div>
    );
  }

}

