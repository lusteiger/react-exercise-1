import React, { Component } from 'react';
import avatarSrc from './assets/avatar.jpg';
import './App.scss';
import { Avatar } from './compoments/Avatar/Avatar';
import { Headline } from './compoments/Headline/headline';
import { Introduction } from './compoments/Introduction/Introduction';
import { Resume } from './compoments/Resume/Resume';

const title = 'Hello,';
const description = 'my name is kamil 24yo and this is my resume/cv';
class App extends Component {
  render() {
    return (
      <main className="app">
        <Avatar src={avatarSrc} />
        <Headline title={title} description={description} />

        <Introduction />

        <Resume title="About me">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            aut placeat quam deserunt, pariatur nam ad commodi modi voluptas quo
            ratione quia molestias nesciunt debitis ab quae. Sit, reprehenderit
            aliquam.
          </p>
        </Resume>
      </main>
    );
  }
}

export default App;
