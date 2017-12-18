import React from 'react';

import { CircularProgress } from 'material-ui/Progress';

import EditComponent from '../EditComponent';

export default class Edit extends React.Component {
  componentWillMount() {
    const { fetch } = this.props;
    fetch();
  }

  render() {
    const { action, data } = this.props;
    return data
      ? <EditComponent action={action} data={data} />
      : <CircularProgress />;
  }
}
