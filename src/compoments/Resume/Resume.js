import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Resume.scss';

export class Resume extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className="Resume">
        <h3>{title}</h3>
        {children}
      </div>
    );
  }

  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  };
}
