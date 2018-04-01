import { connect } from 'react-redux';

import EditComponent from './EditComponent';

export default connect(
  () => ({}),
  (dispath, { action }) => ({
    onSubmit: result => {
      dispath(action(result));
    }
  })
)(EditComponent);