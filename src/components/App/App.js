import Footer from "../footer/footer";
import Header from "../header/header";
import About from '../about/about';
import CoffeeList from '../coffee-list/coffee-list';
import './app.scss';

import MenuContext from "../context/MenuContext";
import { useState, useMemo } from "react";

const App = (props) => {

  const [menu, setMenu] = useState('coffee-house');
  // const [test, setTest] = useState('t');
  const [coffeeItem, setCoffeeItem] = useState(null);
  const data = [
                {name: 'Solimo Coffee Beans 2 kg', origin: 'Brazil',   price: 10.73, imgName: '1', best: true}, 
                {name: 'Presto Coffee Beans 1 kg', origin: 'Kenya',    price: 15.99, imgName: '2', best: true}, 
                {name: 'AROMISTICO Coffee 1 kg',   origin: 'Columbia', price: 6.99,  imgName: '3', best: true},
                {name: 'AROMISTICO Coffee 1 kg B', origin: 'Brazil',   price: 10.73, imgName: '3', best: false}, 
                {name: 'AROMISTICO Coffee 1 kg K', origin: 'Kenya',    price: 15.99, imgName: '4', best: true}, 
                {name: 'AROMISTICO Coffee 1 kg C', origin: 'Columbia', price: 6.99,  imgName: '3', best: false}            
            ];
  

  const setMenuName = (e) => {
    e.preventDefault();
    setMenu(e.target.name);
    setCoffeeItem(null);
  }

  const valueMenuContext = {
      name: menu, 
      setMenuName
  };

  const MemoCoffeeList = useMemo(() => {
    return <CoffeeList 
              menu={menu}
              data={data} 
              onCoffeeItemClick={(item) => {
                setCoffeeItem(item)}}/>;
  }, [menu]);

  return (
    <div className="App">

      {/* <button onClick={()=>setTest('test 2')}>app {test}</button> */}

      <MenuContext.Provider value={valueMenuContext}>
        
        <Header/>      

        <div className='content'> 
            <About 
              coffeeItem={coffeeItem}/>
              {coffeeItem ? null : MemoCoffeeList}
        </div>

        <Footer/>

      </MenuContext.Provider>

    </div>
  );
}

export default App;