import React, { Fragment } from 'react';

import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import LeftListItemSecondaryAction from '../../common/LeftListItemSecondaryAction';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import IconButton from 'material-ui/IconButton';

import redirect from '../../common/navigation';
import NewButton from '../../common/new-button';

export default ({ users = [] }) => <Fragment>
  <List>
    {users.map(({ id, firstName, lastName, userName }) => <ListItem button
      key={id}
      divider={true}
      onClick={() => redirect(`/users/${id}`)}>
      <ListItemText
        primary={`${firstName} ${lastName}`}
        secondary={userName} />
      <LeftListItemSecondaryAction>
        <IconButton>
          <ModeEditIcon onClick={() => redirect(`/users/${id}/edit`)} />
        </IconButton>
      </LeftListItemSecondaryAction>
    </ListItem>
    )}
  </List>
  <NewButton path={'/users/new/'} />
</Fragment>;
