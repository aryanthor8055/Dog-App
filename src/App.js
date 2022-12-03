import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
import whiskey from "./Images/whiskey.jpg"
import tubby from "./Images/tubby.jpg"
import hazel from "./Images/hazel.jpg"
import { Component } from 'react';
import Navbar from './Navbar';


class  App extends Component{
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  };
  render(){
    
    return (
      <div>
        <Navbar dogs={this.props.dogs}/>
        <div className='container'>
     <Routes dogs={this.props.dogs}/>
     </div>
      </div>
    );
  }
 
}

export default App;
