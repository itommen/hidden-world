import { connect } from 'react-redux';

import FullScreen from './FullScreen';

import { fetchTripPart } from '../redux';

const mapStateToProps = ({ tripParts }, { params: { tripPartId } }) => {
  return {
    data: tripParts[tripPartId]
  };
};

const mapDispatchToProps = (dispath, { params: { tripPartId } }) => {
  return {
    fetch: () => dispath(fetchTripPart(tripPartId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FullScreen);
