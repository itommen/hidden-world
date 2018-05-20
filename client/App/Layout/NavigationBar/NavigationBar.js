import React from 'react';

import Paper from 'material-ui/Paper';

import HomeIcon from 'material-ui-icons/Home';
import PersonIcon from 'material-ui-icons/Person';
import ExtensionIcon from 'material-ui-icons/Extension';
import LocationOnIcon from 'material-ui-icons/LocationOn';

import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';

export default ({ selected, handleChange }) => <Paper elevation={20}>
  <BottomNavigation
    value={selected}
    onChange={handleChange}
    showLabels>
    <BottomNavigationAction
      label='Home'
      icon={<HomeIcon />}
    />
    <BottomNavigationAction
      label='Trip Part'
      icon={<ExtensionIcon />}
    />
    <BottomNavigationAction
      label='Manage Countries'
      icon={<LocationOnIcon />}
    />
    <BottomNavigationAction
      label='Users'
      icon={<PersonIcon />}
    />
  </BottomNavigation>
</Paper>;
