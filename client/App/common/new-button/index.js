import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import redirect from '../../common/navigation';

export default ({ path }) => <FloatingActionButton
  mini={true}
  style={{
    position: 'fixed',
    bottom: '2%',
    left: '2%'
  }}
  onClick={() => redirect(path)} >
  <ContentAdd />
</FloatingActionButton>;
