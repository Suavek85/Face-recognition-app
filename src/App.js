import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


const app = new Clarifai.App({
  apiKey: '7843a514af414819aee50b219a739f41'
 });


const particlesOptions = {
  particles: {
    number: {
value: 70,
density: {
  enable: true,
  value_area: 800
}
    }
  }
}

class App extends Component {

constructor() {

  super();

  this.state = {

    input: '',
    imageURL: '',

  }


}

onInputChange = (event) => {
this.setState({input: event.target.value});
}

onButtonSubmit = () => {
console.log('click');

this.setState({imageURL: this.state.input});

app.models.predict(Clarifai.COLOR_MODEL, "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      console.log(response);
    },
    function(err) {
      // there was an error
    }
  );





}


  render() {
    return (
      <div className="App">

<Particles className='particles'
              params={ particlesOptions }
              
            />


        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm  onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition imageURL={this.state.imageURL} />
      </div>
    );
  }
}

export default App;
