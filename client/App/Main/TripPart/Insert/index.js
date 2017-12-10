import { connect } from 'react-redux';

import Insert from './Insert';

import { insertTripPart } from '../redux';

import redirect from '../../../common/navigation';

const mapStateToProps = ({ countries: { relevant = [] } = {} }) => ({
  countries: relevant
});

const mapDispatchToProps = dispath => ({
  onSubmit: data => {
    dispath(insertTripPart(data))
      .then(() => {
        redirect('tripPart');
      });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Insert);
