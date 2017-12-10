import validationCalculator from './index';
import { required, number } from './common-validators';

export default validationCalculator({
  name: [required],
  start: {
    country: [required],
    city: [required]
  },
  end: {
    country: [required],
    city: [required]
  },
  description: [required],
  days: [required, number]
});
