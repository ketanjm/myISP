import React from 'react';

export default class IspDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isp: {} };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    fetch(`/isps/${id}.json`).
      then((response) => response.json()).
      then((isp) => this.setState({ isp }));
  }

  render() {
    const { isp } = this.state;
    return (
      <div>
        <div>
          <label> Name</label>
          <p> {isp.name} </p>
        </div>

        <div>
          <label> Lowest Price </label>
          <p> {isp.lowest_price} </p>
        </div>

        <div>
          <label> Rating </label>
          <p> {isp.rating} </p>
        </div>
	    
        <div>
          <label> Max Speed </label>
          <p> {isp.max_speed} </p>
        </div>
  
        <div>
          <label> Contact Number </label>
          <p> {isp.contact_no} </p>
        </div>

        <div>
          <label> Email </label>
          <p> {isp.email} </p>
        </div>

        <div>
          <label> Image </label>
          <p> {isp.image} </p>
        </div>

        <div>
          <label> Url </label>
          <p> {isp.url} </p>
        </div>


        <div>
          <label> Description</label>
          <p> {isp.description} </p>
        </div>

      </div>
    );
  }
}
