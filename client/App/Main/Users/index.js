import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import alerter from '../../common/alerter';

import Users from './Users';
import { loadUsers, remove } from './redux';

export default compose(
  connect(
    ({ users: { data } = {} }) => ({ users: data }),
    dispath => ({
      loadData: () => dispath(loadUsers()),
      onDelete: async function (id) {
        const { error } = await dispath(remove(id));

        alerter({
          message: error
            ? 'המחיקה נכשלה'
            : 'המחיקה הסתיימה בהצלחה'
        });
      }
    })
  ),
  lifecycle({
    componentWillMount() {
      const { loadData } = this.props;
      loadData();
    }
  })
)(Users);
