import React from 'react';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import { browserHistory } from 'react-router';
import {values} from 'lodash';

import redirect from '../../common/navigation';

const NavigationState = {
  Home: {
    index: 0,
    state: '/',
    isDefault: true
  },
  TripPart: {
    index: 1,
    state: '/tripPart'
  }
};

export default class NavigationBar extends React.Component {
  componentWillMount() {
    const { pathname } = browserHistory.getCurrentLocation();

    const currentState = values(NavigationState)
      .find(({ state, isDefault }) => pathname.startsWith(state) && !isDefault) || NavigationState.Home;

    this.select(currentState);
  }

  select({ index, state }) {
    this.setState({ selectedIndex: index });
    redirect(state);
  }

  render() {
    return <Paper zDepth={1}>
      <BottomNavigation selectedIndex={this.state.selectedIndex}>
        <BottomNavigationItem
          label="Home"
          icon={<FontIcon className="material-icons">home</FontIcon>}
          onClick={() => this.select(NavigationState.Home)}
        />
        <BottomNavigationItem
          label="Trip Part"
          icon={<FontIcon className="material-icons">location_on</FontIcon>}
          onClick={() => this.select(NavigationState.TripPart)}
        />
      </BottomNavigation>
    </Paper>;
  }
}