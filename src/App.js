import React, { Component } from 'react';
import avatarSrc from './assets/avatar.jpg';
import './App.scss';
import { Avatar } from './compoments/Avatar/Avatar';
class App extends Component {
  render() {
    return (
      <main className="app">
        <Avatar src={avatarSrc} />
      </main>
    );
  }
}

export default App;
