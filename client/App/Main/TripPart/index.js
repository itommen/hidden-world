import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import TripPart from './TripPart';
import { loadTripParts, deleteTripPart } from './redux';

import alerter from '../../common/alerter';

export default compose(
  connect(
    ({ tripParts: { data } = {} }) => ({ tripParts: data }),
    dispath => ({
      loadData: () => dispath(loadTripParts()),
      onDelete: async function (id) {
        const { error } = await dispath(deleteTripPart(id));

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
)(TripPart);
