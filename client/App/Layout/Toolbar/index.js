import React from 'react';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import Logout from './Logout';

class Toolbar extends React.Component {
  render() {
    const { isAutorized } = this.props;

    return <AppBar
      title='עולם נסתר'
      showMenuIconButton={false}
      iconElementRight={isAutorized ? <Logout /> : <span />}
    />;
  }
}

Toolbar.propTypes = {
  isAutorized: PropTypes.bool.isRequired
};

export default Toolbar;
