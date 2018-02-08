import React from 'react';

import Button from 'material-ui/Button';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';

export default ({ logout }) => <Button
  raised
  onClick={() => logout()}>
  <ChevronRightIcon />
  התנתק
</Button>;
