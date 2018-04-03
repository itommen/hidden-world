import React from 'react';

import { ListItemSecondaryAction } from 'material-ui/List';

export default class LeftListItemSecondaryAction extends ListItemSecondaryAction {
  render() {
    const { children } = this.props;
    return <ListItemSecondaryAction style={{
      right: 'unset',
      left: '4px'
    }}>
      {children}
    </ListItemSecondaryAction>;
  }
}
