import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import Edit from './Edit';

import { editTripPart, fetchTripPart } from '../redux';

export default compose(
  connect(
    ({ tripParts }, { params: { tripPartId } }) => ({
      data: tripParts[tripPartId],
      action: editTripPart
    }),
    (dispath, { params: { tripPartId } }) => ({
      fetch: () => dispath(fetchTripPart(tripPartId))
    })
  ),
  lifecycle({
    componentWillMount() {
      const { fetch } = this.props;
      fetch();
    }
  })
)(Edit);
