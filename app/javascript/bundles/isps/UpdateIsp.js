// app/javascript/bundles/posts/UpdatePost.js
import React from 'react';

export default class UpdateIsp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      is_published: true
    }
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    fetch(`/isps/${id}`).
      then((response) => response.json()).
      then((isp) => this.setState({ ...isp }));
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  updateIspRequest = (event) => {
    fetch(`/isps/${this.state.id}`, {
      method: 'put',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      alert('Post updated successfully');
      location.href = '/';
    });
  }

  render() {
    const {title, description, is_published} = this.state;
    return (
      <div>
        <h3>New Post</h3>
        <div>
          <label>Title: </label>
          <input
            type='text'
            name='title'
            value={title}
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
        <div>
          <label>Is Published: </label>
          <input
            type='text'
            name='is_published'
            value={is_published}
            onChange={this.handleInputChange}
            />
        </div>
        <button onClick={this.updateIspRequest}>Update</button>
      </div>
    );
  }
}

