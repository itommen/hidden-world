import React from 'react';

import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Stepper, { Step, StepButton } from 'material-ui/Stepper';

import { Flex } from 'reflexbox';
import { reduxForm } from 'redux-form';

import validate from '~/common/validators/tripPart';

import { GeneralInfo, Description, Images } from './Steps';

const steps = [
  {
    label: 'פרטים כללים',
    step: GeneralInfo,
    params: ['start', 'end', 'countries']
  },
  {
    label: 'תיאור היום',
    step: Description
  },
  {
    label: 'תמונות מהיום',
    step: Images,
    params: ['savedImages']
  }];

class InsertTripPart extends React.Component {
  constructor() {
    super();

    this.state = {
      completed: {},
      activeStep: 0
    };

    this.handleMoveStep = this.handleMoveStep.bind(this);
  }

  componentWillMount() {
    const { data, initialize } = this.props;

    if (data) {
      initialize(data);
    }
  }

  handleMoveStep(index) {
    this.setState(state => ({ ...state, activeStep: index }));
  }

  render() {
    const { handleSubmit, countries, submitting, data = {} } = this.props;
    const { activeStep } = this.state;

    const stepsData = {
      ...data,
      countries
    };
    const step = steps[activeStep];
    const StepComponent = step.step;
    const stepParams = (step.params || []).reduce((result, current) => ({
      ...result,
      [current]: stepsData[current]
    }), {});

    return <Flex auto>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column'
      }}>
        <Typography type='display3'>יום טיול</Typography>
        <Stepper nonLinear activeStep={activeStep}>
          {
            steps.map(({ label }, index) => <Step key={label}>
              <StepButton
                onClick={() => this.handleMoveStep(index)}
                completed={this.state.completed[index]}
              >
                {label}
              </StepButton>
            </Step>)
          }
        </Stepper>
        <Flex column auto justify='space-between'>
          <StepComponent {...stepParams} />
          <Button
            raised
            type='submit'
            name={'login'}
            disabled={submitting}
            color='primary'>
            שמור
          </Button>
        </Flex>
      </form>
    </Flex>;
  }
}

export default reduxForm({
  form: 'editTripPartForm',
  validate,
  initialValues: {
    flight: []
  }
})(InsertTripPart);
