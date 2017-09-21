import React from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

class Logout extends React.Component {
  render() {
    const { logout } = this.props;

    return <RaisedButton
      label='התנתק'
      icon={<FontIcon className='material-icons'>chevron_right</FontIcon>}
      onClick={() => logout()} />;
  }
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired
};

export default Logout;
