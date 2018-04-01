import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import Users from './Users';
import { loadUsers } from './redux';

export default compose(
  connect(
    ({ users: { data } = {} }) => ({ users: data }),
    dispath => ({ loadData: () => dispath(loadUsers()) })
  ),
  lifecycle({
    componentWillMount() {
      const { loadData } = this.props;
      loadData();
    }
  })
)(Users);
