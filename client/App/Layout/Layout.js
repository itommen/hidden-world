import React from 'react';

import { Flex } from 'reflexbox';
import Snackbar from 'material-ui/Snackbar';

import { clearAlert } from '../common/alerter';

import Toolbar from './Toolbar';
import NavigationBar from './NavigationBar';

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
    const { isAutorized, alert: { isOpen, message, autoHideDuration } } = this.props;

    return (
      <Flex id='root' column auto>
        <Toolbar isAutorized={isAutorized} />
        {isAutorized ? <NavigationBar /> : ''}
        <Flex column auto m={12}>
          {this.props.children}
        </Flex>
        <Snackbar
          open={isOpen}
          message={message}
          autoHideDuration={autoHideDuration}
          onRequestClose={clearAlert}
        />
      </Flex>
    );
  }
}
