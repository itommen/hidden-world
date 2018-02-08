import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import FullScreen from './FullScreen';

import { fetchTripPart } from '../redux';

export default compose(
  connect(
    ({ tripParts }, { params: { tripPartId } }) => ({
      data: tripParts[tripPartId],
      loaded: !!tripParts[tripPartId]
    }),
    (dispath, { params: { tripPartId } }) => ({ fetch: () => dispath(fetchTripPart(tripPartId)) })
  ),
  lifecycle({
    componentWillMount() {
      const { fetch } = this.props;
      fetch();
    }
  })
)(FullScreen);
