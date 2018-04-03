import React, { Fragment } from 'react';

import List, { ListItem, ListItemText } from 'material-ui/List';
import LeftListItemSecondaryAction from '../../../common/LeftListItemSecondaryAction';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import DeleteIcon from 'material-ui-icons/Delete';
import IconButton from 'material-ui/IconButton';

import redirect from '../../../common/navigation';
import NewButton from '../../../common/new-button';

import dialoger, { closeDialog } from '../../../common/dialoger';

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
        <IconButton>
          <DeleteIcon onClick={() => dialoger({
            title: 'מחיקת חלק טיול',
            content: `האם אתה בטוח שברצונך למחוק את החלק טיול ${name}?`,
            actions: [
              {
                title: 'כן',
                callback: () => {
                  onDelete(id);
                  closeDialog();
                }
              },
              {
                title: 'לא',
                callback: closeDialog
              }
            ]
          })} />
        </IconButton>
      </LeftListItemSecondaryAction>
    </ListItem>)}
  </List>
  <NewButton path={'tripPart/new/'} />
</Fragment>;
