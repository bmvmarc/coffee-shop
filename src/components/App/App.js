import Footer from "../footer/footer";
import Header from "../header/header";
import { useState } from "react";
import About from '../about/about';
import CoffeeList from '../coffee-list/coffee-list';
import './app.scss';


const App = (props) => {

  const [menu, setMenu] = useState('coffee-house');
  const [coffeeItem, setCoffeeItem] = useState(null);
  const data = [
                {name: 'Solimo Coffee Beans 2 kg', origin: 'Brazil',   price: 10.73, imgName: '1', best: true}, 
                {name: 'Presto Coffee Beans 1 kg', origin: 'Kenya',    price: 15.99, imgName: '2', best: true}, 
                {name: 'AROMISTICO Coffee 1 kg',   origin: 'Columbia', price: 6.99,  imgName: '3', best: true},
                {name: 'AROMISTICO Coffee 1 kg B', origin: 'Brazil',   price: 10.73, imgName: '3', best: false}, 
                {name: 'AROMISTICO Coffee 1 kg K', origin: 'Kenya',    price: 15.99, imgName: '4', best: true}, 
                {name: 'AROMISTICO Coffee 1 kg C', origin: 'Columbia', price: 6.99,  imgName: '3', best: false}            
            ];
  
  const onMenuClick = (e) => {
    e.preventDefault();
    setMenu(e.target.name);
    setCoffeeItem(null);
  }

  return (
    <div className="App">
      
      <Header 
        onMenuClick={onMenuClick}
        menuName={menu}/>

      <div className='content'> 
          <About menuName={menu} coffeeItem={coffeeItem}/>
          {coffeeItem ? null : 
            <CoffeeList 
                menuName={menu} 
                data={data} 
                onCoffeeItemClick={item => setCoffeeItem(item)}
            />
          }
      </div>

      <Footer 
        onMenuClick={onMenuClick}/>

    </div>
  );
}

export default App;