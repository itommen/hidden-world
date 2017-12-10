import validationCalculator from './index';
import { required } from './common-validators';

export default validationCalculator({
  userName: [required],
  password: [required]
});
