import React from 'react';
import './App.css';
import Post from './post/post'
import './post/post.css';
import postimg from './assets/img/1hbVBwPsnlY.jpg'

function App() {
  return (
    <Post
    name= "Anakin skywalker"
    nickname= "@dart_vader"
    content="Если ты будешь себя жалеть — ты никогда не победишь."
    date= "26 февр." />
  );
}
export default App;
