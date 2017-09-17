import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

export default ({logout}) => <RaisedButton 
  label="התנתק"
  icon={<FontIcon className="material-icons">chevron_right</FontIcon>} 
  onClick={() => logout()}
  />;