import { connect } from 'react-redux';

import TripPart from './TripPart';
import { loadTripParts } from './redux';

const mapStateToProps = ({ tripParts: { data } = {} }) => ({
  tripParts: data
});

const mapDispatchToProps = dispath => ({
  loadData: () => {
    dispath(loadTripParts());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TripPart);
