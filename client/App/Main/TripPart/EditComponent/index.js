import { connect } from 'react-redux';

import EditComponent from './EditComponent';

import alerter from '../../../common/alerter';
import redirect from '../../../common/navigation';

const mapStateToProps = ({ countries: { relevant = [] } = {} }) => ({
  countries: relevant
});

const mapDispatchToProps = (dispath, { action }) => ({
  onSubmit: data => {
    dispath(action(data))
      .then(({ error }) => {
        if (error) {
          alerter({ message: 'save failed' });
        } else {
          alerter({ message: 'save succsed' });
          redirect('tripPart');
        }
      });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditComponent);
