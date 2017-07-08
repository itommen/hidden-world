import React from 'react';

import AppBar from 'material-ui/AppBar';

export default class Toolbar extends React.Component {
  render() {
    return <AppBar
            title='עולם נסתר'
            showMenuIconButton={false}
        />;
  }
}
