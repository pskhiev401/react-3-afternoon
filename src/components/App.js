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

  updatePost() {
  
  }

  deletePost() {

  }

  createPost() {

  }

  render() {
    console.log(this.state)
    const { posts } = this.state;
    let myPost = this.state.posts.map((element, index) => {
      console.log(element)
      return (
        <div key={element.id}>
          < Post date={element.date}
                  text={element.text} />
        </div>
      )
    }) 
    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <Compose />
          {myPost}
          
        </section>
      </div>
    );
  }
}

export default App;
