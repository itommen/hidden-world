import React from 'react';

import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

import redirect from '../../common/navigation';

export default ({ path }) => <Button fab color='primary'
  mini={true}
  style={{
    zIndex: 1,
    position: 'fixed',
    bottom: '2%',
    left: '2%'
  }}
  onClick={() => redirect(path)} >
  <AddIcon />
</Button>;
