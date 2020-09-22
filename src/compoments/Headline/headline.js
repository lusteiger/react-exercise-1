import React, { Component } from 'react';
import ProTypes from 'prop-types';
import './headline.scss';
export class Headline extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { title, description } = this.props;
    return (
      <div className="headline">
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
    );
  }

  static ProTypes = {
    title: ProTypes.string,
    description: ProTypes.string,
  };
}
