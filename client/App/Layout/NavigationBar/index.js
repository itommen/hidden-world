import { connect } from 'react-redux';
import { compose } from 'recompose';

import redirect from '../../common/navigation';

const NavigationState = ['', 'tripPart', 'manageCountries', 'users'];

import NavigationBar from './NavigationBar';

export default compose(
  connect(
    ({ routing: { locationBeforeTransitions: { pathname } } }) => ({
      selected: NavigationState.findIndex(x => x === (pathname.split('/').filter(p => p)[0] || ''))
    }),
    () => ({
      handleChange(event, value) {
        redirect(`/${NavigationState[value]}`);
      }
    })
  )
)(NavigationBar);
