import React from 'react';

import { ListItemSecondaryAction } from 'material-ui/List';

export default ({ children }) => <ListItemSecondaryAction style={{
  right: 'unset',
  left: '4px'
}}>
  {children}
</ListItemSecondaryAction>