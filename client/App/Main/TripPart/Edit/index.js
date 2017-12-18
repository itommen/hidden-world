import { connect } from 'react-redux';

import Edit from './Edit';

import { editTripPart, fetchTripPart } from '../redux';

const mapStateToProps = ({ tripParts }, { params: { tripPartId } }) => {
  return {
    data: tripParts[tripPartId],
    action: editTripPart
  };
};

const mapDispatchToProps = (dispath, { params: { tripPartId } }) => {
  return {
    fetch: () => dispath(fetchTripPart(tripPartId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
