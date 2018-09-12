import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Post from './Post/Post';

import Header from './Header/Header';
import Compose from './Compose/Compose';

const BASE_URL ='https://practiceapi.devmountain.com/api'

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.updatePost = this.updatePost.bind( this );
    this.deletePost = this.deletePost.bind( this );
    this.createPost = this.createPost.bind( this );
  }
  
  componentDidMount() {
    axios.get(BASE_URL+'/posts').then( response => {
      console.log(response)
      this.setState( { posts: response.data});
    });
  }

  updatePost(id, text) {
    axios.put( `https://practiceapi.devmountain.com/api/posts?id=${id}`, {text}).then( response2 => {
      console.log(response2)
      this.setState( {posts: response2.data});
    });
  }

  deletePost(id) {
    axios.delete(`https://practiceapi.devmountain.com/api/posts?id=${id}`,).then ( response3 => {
      this.setState({ post: response3.data});
    });
  }

  createPost(text) {
    axios.post(BASE_URL+'/posts', {text}).then ( response4 => {
      this.setState({post: response4.data});
    });
  }

  render() {
    console.log(this.state)
    const { posts } = this.state;
    
    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <Compose createPostFn={ this.createPost } />
          {
            posts.map( post => (
              <Post key={ post.id }
                    text= {post.text}
                    date={post.date}
                    id={post.id}
                    updatePostFn= {this.updatePost}
                    deletePostFn= {this.deletePost} />
            ))
          }
          
        </section>
      </div>
    );
  }
}

export default App;
