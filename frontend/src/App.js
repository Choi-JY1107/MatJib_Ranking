import React, { Component } from 'react';

class App extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/board/');
      const posts = await res.json();
      this.setState({
        posts
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.posts.id}</h1>
        <h1>{this.state.posts.title}</h1>
        <span>{this.state.posts.content}</span>
      </div>
    );
  }
}

export default App;