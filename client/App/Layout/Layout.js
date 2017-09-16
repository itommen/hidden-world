import React from 'react';

import Toolbar from '../Toolbar';

export default class Layout extends React.Component {
  componentWillUpdate() {
    const { stateValidator } = this.props;
    stateValidator();
  }
  componentWillMount() {
    const { stateValidator } = this.props;
    stateValidator();
  }

  render() {
    return (
      <div>
        <Toolbar />
        {this.props.children}
      </div>
    );
  }
} 