import { connect } from 'react-redux';
import { reset } from 'redux-form';
import uuid from 'uuid/v4';

import EditComponent, { formName } from './EditComponent';

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispath, { save, close }) => ({
  onSubmit: (data) => {
    save({
      ...data,
      id: data.id || uuid()
    });
    dispath(reset(formName));
  },
  closeDialog: () => {
    close();
    dispath(reset(formName));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditComponent);
