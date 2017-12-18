import React from 'react';

import Button from 'material-ui/Button';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';

export default class Logout extends React.Component {
  render() {
    const { logout } = this.props;

    return <Button
      raised
      onClick={() => logout()}>
      <ChevronRightIcon />
      התנתק
    </Button>;
  }
}
