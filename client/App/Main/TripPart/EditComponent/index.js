import { connect } from 'react-redux';

import EditComponent from './EditComponent';

import alerter from '../../../common/alerter';
import redirect from '../../../common/navigation';

export default connect(
  ({ countries: { relevant = [] } = {} }) => ({
    countries: relevant
  }),
  (dispath, { action }) => ({
    onSubmit: async function (data) {
      const { error } = await dispath(action(data));
      if (error) {
        alerter({ message: 'save failed' });
      } else {
        alerter({ message: 'save succsed' });
        redirect('/tripPart');
      }
    }
  }))
  (EditComponent);
