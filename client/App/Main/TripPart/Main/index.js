import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import TripPart from './TripPart';
import { loadTripParts } from '../redux';

export default compose(
  connect(
    ({ tripParts: { data } = {} }) => ({ tripParts: data }),
    dispath => ({ loadData: () => dispath(loadTripParts()) })
  ),
  lifecycle({
    componentWillMount() {
      const { loadData } = this.props;
      loadData();
    }
  })
)(TripPart);
