import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import FullScreen from './FullScreen';

import { fetch } from '../redux';

export default compose(
  connect(
    ({ users }, { params: { id } }) => ({
      data: users[id],
      loaded: !!users[id]
    }),
    (dispath, { params: { id } }) => ({ fetch: () => dispath(fetch(id)) })
  ),
  lifecycle({
    componentWillMount() {
      const { fetch } = this.props;
      fetch();
    }
  })
)(FullScreen);
