import React from 'react';

import { without } from 'lodash';
import { Flex } from 'reflexbox';

import { FormControl, FormControlLabel } from 'material-ui/Form';
import Typography from 'material-ui/Typography';
import Checkbox from 'material-ui/Checkbox';

export default ({ formLabel, items = [], input: { onChange, value = [] } }) => <FormControl>
  <Typography>{formLabel}</Typography>
  <Flex>
    {items.map(({ key, label }) => <FormControlLabel key={key}
      control={<Checkbox
        checked={value.includes(key)}
        onChange={() => {
          onChange(value.includes(key)
            ? without(value, key)
            : [...value, key]);
        }}
        value={`${key}`} />}
      label={label}
    />)}
  </Flex>
</FormControl>;
