import React from 'react';
import { Flex } from 'reflexbox';
import PropTypes from 'prop-types';

import Toolbar from './Toolbar';
import NavigationBar from './NavigationBar';

class Layout extends React.Component {
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
      <Flex id='root' column auto>
        <Toolbar isAutorized={isAutorized} />
        { isAutorized ? <NavigationBar /> : '' }
        <Flex column auto>
          {this.props.children}
        </Flex>
      </Flex>
    );
  }
}

Layout.propTypes = {
  stateValidator: PropTypes.func.isRequired,
  isAutorized: PropTypes.bool.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ])
};


export default Layout;
