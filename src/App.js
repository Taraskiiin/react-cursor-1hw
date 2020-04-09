import React from 'react';
import './App.css';
import Post from './post/post'
import './post/post.css';
import postimg from './assets/img/1hbVBwPsnlY.jpg'

function App() {
  return (
    <Post
    avatar= "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg"
    name= "Anakin skywalker"
    nickname= "@dart_vader"
    content="Если ты будешь себя жалеть — ты никогда не победишь."
    date= "26 февр."
    postimg={postimg}/>
  );
}
export default App;
