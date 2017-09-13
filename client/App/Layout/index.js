import React from 'react';

import Toolbar from '../Toolbar';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Toolbar />
        {this.props.children}
      </div>
    );
  }
} 