import React from 'react';
import {Redirect} from 'react-router-dom';

export default class CreateIsp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lowest_price: '',
      rating: '',
      max_speed: '',
      contact_no: '',
      email: '',
      image: '',
      url: '',
      description: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  createIspRequest = (event) => {
    console.log('this.state', this.state);
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");  
    fetch('/isps.json', {
      method: 'post',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrf },
    }).then((response) => {
      alert('Isp created successfully');
      location.href = '/';
    });
  }

  render() {
    const {name, lowest_price, rating, max_speed, contact_no, email, image, url, description} = this.state;
    return (
      <div>
        <h3>New Isp</h3>
        <div>
          <label>Name: </label>
          <input
            type='text'
            name='name'
            value={name}
            onChange={this.handleInputChange}
            />
        </div>
        <div>
          <label>Lowest Price: </label>
          <input
            type='text'
            name='lowest_price'
            value={lowest_price}
            onChange={this.handleInputChange}
            />
        </div>
        <div>
          <label>Rating: </label>
          <input
            type='text'
            name='rating'
            value={rating}
            onChange={this.handleInputChange}
            />
        </div>
        <div>
          <label>Max Speed: </label>
          <input
            type='text'
            name='max_speed'
            value={max_speed}
            onChange={this.handleInputChange}
            />
	    </div>   
         
        <div>
          <label>Contact Number: </label>
          <input
            type='text'
            name='contact_no'
            value={contact_no}
            onChange={this.handleInputChange}
            />
         </div>   
        
        <div>
          <label>Email: </label>
          <input
            type='text'
            name='email'
            value={email}
            onChange={this.handleInputChange}
            />
         </div>   
         
         <div>
          <label>Image: </label>
          <input
            type='text'
            name='image'
            value={image}
            onChange={this.handleInputChange}
            />
	     </div>   
	    
        <div>
          <label>url: </label>
          <input
            type='text'
            name='url'
            value={url}
            onChange={this.handleInputChange}
            />
        </div>   
         
        <div>
          <label>Description: </label>
          <input
            type='text'
            name='description'
            value={description}
            onChange={this.handleInputChange}
            />
	    </div>   
	    <button onClick={this.createIspRequest}>Create</button>
      </div>
    );
  }
}


