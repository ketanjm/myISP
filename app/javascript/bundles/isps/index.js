import React from 'react';
import { Link } from 'react-router-dom';

export default class IspsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isps: [] };
  }

  componentDidMount() {
    this.fetchIspsList();
  }

  fetchIspsList = () => {
    fetch('/isps.json').
      then((response) => response.json()).
      then((isps) =>  this.setState({ isps }));
  };
  
  handleDelete = (ispId) => {
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");    
    fetch(`/isps/${ispId}.json`, { method: 'delete',headers: { 'X-CSRF-Token': csrf }, }).
      then((response) => {
        alert('Post deleted successfully')
        this.fetchIspsList();
      });
  }

  render() {
    const { isps } = this.state;
    return (
      <div>
        <h3>All Isps</h3>
        <Link to='/isps/new'>New Isp</Link>
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
                  <td>
                    <Link to={`/isps/${isp.id}/edit`}>
                      Edit
                    </Link>
                    <button onClick={() => this.handleDelete(isp.id) }>
                      Delete
                    </button>
                  </td>
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
