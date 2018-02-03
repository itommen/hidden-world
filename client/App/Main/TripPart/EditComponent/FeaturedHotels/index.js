import React, { Fragment, Component } from 'react';

import { Flex } from 'reflexbox';

import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import AddIcon from 'material-ui-icons/Add';
import Delete from 'material-ui-icons/Delete';
import ModeEdit from 'material-ui-icons/ModeEdit';

import FeaturedHotel from './FeaturedHotel';
import EditComponent from './EditComponent';

export default class FeaturedHotels extends Component {
  constructor() {
    super();

    this.state = {
      shouldShowNewDialog: false,
      shouldShowUpdateDialog: false
    };

    this.showNewDialog = this.toggleNewDialog.bind(this);
    this.saveNew = this.saveNew.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
  }

  toggleNewDialog(shouldOpen, indicatorName) {
    return () => this.setState(state => ({
      ...state,
      [indicatorName]: shouldOpen
    }));
  }

  saveNew(data) {
    const { input: { onChange, value } } = this.props;

    onChange([...value, data]);

    this.toggleNewDialog(false, 'shouldShowNewDialog')();
  }

  remove(idToRemove) {
    const { input: { onChange, value } } = this.props;
    onChange(value.filter(({ id }) => id !== idToRemove));
  }

  update(data) {
    const { input: { onChange, value } } = this.props;

    const hotelToUpdate = value.find(({ id }) => id === data.id);
    Object.assign(hotelToUpdate, data);
    onChange(value);
    this.toggleNewDialog(false, 'shouldShowUpdateDialog')();
  }

  render() {
    const { input: { value = [] }, label } = this.props;
    const { shouldShowNewDialog, shouldShowUpdateDialog, updateData } = this.state;

    return <Fragment>
      <Typography>{label}</Typography>
      <Flex>
        {value
          ? value.map(data =>
            <FeaturedHotel key={data.name}
              name={data.name}
              link={data.link}
              stars={data.stars}>
              <Delete onClick={() => this.remove(data.id)} />
              <ModeEdit onClick={() => {
                this.setState(state => ({ ...state, updateData: data }));
                this.toggleNewDialog(true, 'shouldShowUpdateDialog')();
              }} />
            </FeaturedHotel>
          )
          : null}
        <Flex column justify='space-around'>
          <Button fab color='primary'
            mini={true}
            onClick={this.toggleNewDialog(true, 'shouldShowNewDialog')} >
            <AddIcon />
          </Button>
        </Flex>
      </Flex>
      <EditComponent
        close={this.toggleNewDialog(false, 'shouldShowNewDialog')}
        save={this.saveNew}
        isOpen={shouldShowNewDialog} />
      {
        shouldShowUpdateDialog
          ? <EditComponent data={updateData}
            save={this.update}
            close={this.toggleNewDialog(false, 'shouldShowUpdateDialog')}
            isOpen={shouldShowUpdateDialog} />
          : null
      }
    </Fragment >;
  }
}
