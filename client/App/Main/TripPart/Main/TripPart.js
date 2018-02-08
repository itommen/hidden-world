import React, { Fragment } from 'react';

import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import ModeEditIcon from 'material-ui-icons/ModeEdit';

import redirect from '../../../common/navigation';
import NewButton from '../../../common/new-button';

import PrimaryText from './PrimaryText';

export default ({ tripParts = [] }) => <Fragment>
  <List>
    {tripParts.map(({ id, name, start, end, days, flight }) => <ListItem button
      key={id}
      divider={true}
      onClick={() => redirect(`tripPart/${id}`)}>
      <ListItemText
        primary={<PrimaryText name={name} start={start} end={end} flight={flight} />}
        secondary={`${days} ימים`} />
      <ListItemSecondaryAction>
        <ModeEditIcon onClick={() => redirect(`tripPart/${id}/edit`)} />
      </ListItemSecondaryAction>
    </ListItem>)}
  </List>
  <NewButton path={'tripPart/new/'} />
</Fragment>;
