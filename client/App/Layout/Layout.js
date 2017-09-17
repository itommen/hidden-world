import React from 'react';
import { Flex } from 'reflexbox';

import Toolbar from './Toolbar';

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
    const { isAutorized } = this.props;

    return (
      <Flex id="root" column auto>
        <Toolbar isAutorized={isAutorized} />
        <Flex column auto>
          {this.props.children}
        </Flex>
      </Flex>
    );
  }
} 