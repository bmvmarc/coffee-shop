import Footer from "../footer/footer";
import Content from "../content/content";
import Header from "../header/header";
import { Component } from "react";


export default class App extends Component{

  constructor (props) {
    super(props);
    this.state = {
      menu: 'coffee-house',
      data: [
            {name: 'Solimo Coffee Beans 2 kg', price: 10.73, imgName: '1', best: true}, 
            {name: 'Presto Coffee Beans 1 kg', price: 15.99, imgName: '2', best: true}, 
            {name: 'AROMISTICO Coffee 1 kg', price: 6.99, imgName: '3', best: true}
      ]
    }
  }

  onMenuClick = (e) => {
    e.preventDefault();
    this.setState({
      menu: e.target.name
    });
  }


  render () {

    const menu = this.state.menu;

    return (
      <div className="App">
       
        <Header 
          onMenuClick={this.onMenuClick}
          menuName={menu}/>

        <Content 
          menuName={menu}
          data={this.state.data}
        />

        <Footer 
          onMenuClick={this.onMenuClick}/>

      </div>
    );
  }

}

