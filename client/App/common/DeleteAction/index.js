import React from 'react';

import DeleteIcon from 'material-ui-icons/Delete';
import IconButton from 'material-ui/IconButton';

import dialoger, { closeDialog } from '../dialoger';

export default ({ name, onDelete, type }) => <IconButton>
  <DeleteIcon onClick={() => dialoger({
    title: `מחיקת ${type}`,
    content: `האם אתה בטוח שברצונך למחוק את ה${type} ${name}?`,
    actions: [
      {
        title: 'כן',
        callback: () => {
          onDelete();
          closeDialog();
        }
      },
      {
        title: 'לא',
        callback: closeDialog
      }
    ]
  })} />
</IconButton>;
