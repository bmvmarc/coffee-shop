import Footer from "./footer/footer";
import Content from "./content";
import Header from "./header";
import { Component } from "react";



export default class App extends Component{

  constructor (props) {
    super(props);
    this.state = {
      menu: 0
    }
  }

  onMenuChange = (num) => {
    this.setState({
      menu: num
    });
  }

  render () {

    const {menu} = this.state.menu;

    return (
      <div className="App">
        <Header menu={menu}/>
        <Content menu={menu}/>
        <Footer/>
      </div>
    );
  }

}

