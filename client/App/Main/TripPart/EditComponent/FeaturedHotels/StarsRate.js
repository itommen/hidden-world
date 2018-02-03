import React from 'react';

import StarIcon from 'material-ui-icons/Star';
import yellow from 'material-ui/colors/yellow';

import Repeat from 'react-repeat-component';

export default ({ rate }) => <Repeat key={rate} times={rate}>
  {(i) => <StarIcon style={{ fill: yellow[600] }} key={`${rate}icon${i}`} />}
</Repeat>;
