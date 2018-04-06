import React, { Fragment } from 'react';

import List, { ListItem, ListItemText } from 'material-ui/List';
import LeftListItemSecondaryAction from '../../common/LeftListItemSecondaryAction';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import IconButton from 'material-ui/IconButton';

import redirect from '../../common/navigation';
import NewButton from '../../common/new-button';

import DeleteAction from '../../common/DeleteAction';

import PrimaryText from './PrimaryText';

export default ({ tripParts = [], onDelete }) => <Fragment>
  <List>
    {tripParts.map(({ id, name, start, end, days, flight }) => <ListItem button
      key={id}
      divider={true}
      onClick={() => redirect(`tripPart/${id}`)}>
      <ListItemText
        primary={<PrimaryText name={name} start={start} end={end} flight={flight} />}
        secondary={`${days} ימים`} />
      <LeftListItemSecondaryAction>
        <IconButton>
          <ModeEditIcon onClick={() => redirect(`tripPart/${id}/edit`)} />
        </IconButton>
        <DeleteAction onDelete={() => onDelete(id)} name={name} type={'חלק טיול'} />
      </LeftListItemSecondaryAction>
    </ListItem>)}
  </List>
  <NewButton path={'tripPart/new/'} />
</Fragment>;
