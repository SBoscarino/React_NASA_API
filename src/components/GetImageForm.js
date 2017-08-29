import React, { Component } from 'react';
import GetImageButton from './GetImageButton.js';
import ImageHolder from './ImageHolder.js';
const API_KEY = 'vS1Hieeu5FFtX9bEyiZz8ypU3maUszs16SmEQz4V';

class GetImageForm extends Component {
  constructor(){
    super();

    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      data: [],
      sol: ""
    }
  }
  fetchRoverImage(){
    console.log('click')
    this.setState({camera: this.state.camera, rover: this.state.rover, sol: this.state.sol});
    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${API_KEY}`;
    fetch(imageUrl)
    .then(results => {
      return results.json();
    }).then(data => {
      console.log(data.photos);
      this.setState({data : data.photos})
    })
  }

    handleRover = (e) => {
      e.preventDefault();
      console.log('handleRover', e.target.value);
      this.setState({rover : e.target.value})
    }
    handleCamera = (e) => {
      e.preventDefault();
      console.log('handleCamera', e.target.value);
      this.setState({camera : e.target.value})
    }
    handleSol = (e) => {
      e.preventDefault();
      console.log('handleSol', e.target.value);
      this.setState({sol : e.target.value})
    }

    render(){
      return (
        <div>
        <form>
          <label htmlFor="rover">Rover</label>
            <select onChange={this.handleRover} id="rover" value={this.state.value}>
              <option value="Curiosity">Curiosity</option>
              <option value="Opportunity">Opportunity</option>
              <option value="Spirit">Spirt</option>
            </select>
          <label htmlFor="camera">Camera Type</label>
            <select onChange={this.handleCamera} id="rover" value={this.state.value}>
              <option value="fhaz">FHAZ (Front Hazard)</option>
              <option value="rhaz">RHAZ (Rear Hazard)</option>
              <option value="navcam">NAVCAM (Navigation Cam)</option>
            </select>
            <label htmlFor="sol">Martian Sol: 1000-2000</label>
          <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
        </form>
        <GetImageButton buttonClick={() => this.fetchRoverImage()} />
        <ImageHolder photos={this.state.data} />
        </div>
      )
      }
    }
    export default GetImageForm;

    //https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}
