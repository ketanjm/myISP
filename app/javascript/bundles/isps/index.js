import React from 'react';
import { Link } from 'react-router-dom';

export default class IspsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isps: [] };
  }

  componentDidMount() {
    this.fetchPostsList();
  }

  fetchPostsList = () => {
    fetch('/isps.json').
      then((response) => response.json()).
      then((isps) =>  this.setState({ isps }));
  };
  
  handleDelete = (ispId) => {
    fetch(`/isps/${ispId}`, { method: 'delete' }).
      then((response) => {
        alert('Post deleted successfully')
        this.fetchPostsList();
      });
  }

  render() {
    const { isps } = this.state;
    return (
      <div>
        <h3>All Isps</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Lowest Price</th>
              <th>Rating</th>
              <th>Max Speed</th>
              <th>Contact No</th>
              <th>Email</th>
              <th>Image</th>
              <th>Url</th>
              <th>Description</th>
              <th></th>

            </tr>
          </thead>
          <tbody>
          {
            isps.map((isp) => {
              return (
                <tr key={isp.id}>
                  <td>{isp.id}</td>
                  <td>
                    <Link to={`/isps/${isp.id}`}>
                      {isp.name}
                     </Link>
                  </td>
                  <td>{isp.lowest_price}</td>
                  <td>{isp.rating }</td>
                  <td>{isp.max_speed }</td>
                  <td>{isp.contact_no }</td>
                  <td>{isp.email }</td>
                  <td>{isp.url }</td>
                  <td>{isp.image }</td>
                  <td>{isp.description }</td>
                  <td></td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    );
  }
}
