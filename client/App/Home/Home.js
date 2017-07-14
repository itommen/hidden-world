import React from 'react';
import { Link } from 'react-router-dom';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class HomeLayout extends React.Component {
  render() {
    return (
      <div>
        <Drawer open={true} openSecondary={true}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>

        now you are home ...
                <Link to='/login'>Go to login!</Link>
      </div>
    );
  }
}
