import React from 'react';
import Paper from 'material-ui/Paper';

import HomeIcon from 'material-ui-icons/Home';
import LocationOnIcon from 'material-ui-icons/LocationOn';

import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';

import redirect from '../../common/navigation';

const NavigationState = ['', 'tripPart', 'manageCountries'];

export default class NavigationBar extends React.Component {
  constructor() {
    super();

    this.state = {
      selected: 0
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value) {
    this.setState({
      selected: value
    });
    redirect(`/${NavigationState[value]}`);
  }

  render() {
    const { selected } = this.state;

    return <Paper elevation={20}>
      <BottomNavigation
        value={selected}
        onChange={this.handleChange}
        showLabels>
        <BottomNavigationButton
          label='Home'
          icon={<HomeIcon />}
        />
        <BottomNavigationButton
          label='Trip Part'
          icon={<LocationOnIcon />}
        />
        <BottomNavigationButton
          label='Manage Countries'
          icon={<LocationOnIcon />}
        />
      </BottomNavigation>
    </Paper>;
  }
}
