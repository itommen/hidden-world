import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

export default class Logout extends React.Component {
  render() {
    const { logout } = this.props;

    return <RaisedButton
      label='התנתק'
      icon={<FontIcon className='material-icons'>chevron_right</FontIcon>}
      onClick={() => logout()} />;
  }
}
