import { connect } from 'react-redux';

import Insert from './Insert';

import { insertTripPart } from '../redux';

import alerter from '../../../common/alerter';
import redirect from '../../../common/navigation';

const mapStateToProps = ({ countries: { relevant = [] } = {} }) => ({
  countries: relevant
});

const mapDispatchToProps = dispath => ({
  onSubmit: data => {
    dispath(insertTripPart(data))
      .then(({ error }) => {
        if (error) {
          alerter({ message: 'insertaion failed' })
        }
        else {
          alerter({ message: 'insertaion succsed' });
          redirect('tripPart');
        }
      });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Insert);
