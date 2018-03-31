import React, { Fragment } from 'react';

import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import ModeEditIcon from 'material-ui-icons/ModeEdit';

// import redirect from '../../../common/navigation';
import NewButton from '../../common/new-button';

export default ({ users = [] }) => <Fragment>
  <List>
    {users.map(({ id, firstName, lastName, userName }) => <ListItem
      key={id}
      divider={true}>
      <ListItemText
        primary={`${firstName} ${lastName}`}
        secondary={userName} />
      <ListItemSecondaryAction>
        <ModeEditIcon onClick={() => redirect(`tripPart/${id}/edit`)} />
      </ListItemSecondaryAction>
    </ListItem>)}
  </List>
  <NewButton path={'users/new/'} />
</Fragment>;
