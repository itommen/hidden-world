import validationCalculator from './index';
import { required, number, range } from './common-validators';

export default validationCalculator({
  name: [required],
  link: [required],
  stars: [required, number, range(1, 5)]
});
