import React from 'react';

import AppBar from 'material-ui/AppBar';
import Logout from './Logout';

export default class Toolbar extends React.Component {
  render() {
    const { isAutorized } = this.props;

    return <AppBar
      title='עולם נסתר'
      showMenuIconButton={false}
      iconElementRight={isAutorized ? <Logout /> : <span />}
    />;
  }
}
