import React, { Component } from 'react';
import avatarSrc from './assets/avatar.jpg';
import './App.scss';
import { Avatar } from './compoments/Avatar/Avatar';
import { Headline } from './compoments/Headline/headline';

const title = 'Hello,';
const description = 'my name is kamil 24yo and this is my resume/cv';
class App extends Component {
  render() {
    return (
      <main className="app">
        <Avatar src={avatarSrc} />
        <Headline title={title} description={description} />
      </main>
    );
  }
}

export default App;
