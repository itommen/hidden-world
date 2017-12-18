import React from 'react';

import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import ModeEditIcon from 'material-ui-icons/ModeEdit';

import { Flex, Box } from 'reflexbox';

import redirect from '../../common/navigation';
import NewButton from '../../common/new-button';

import FlightIndicator from './FlightIndicator';

export default class MainTripPart extends React.Component {
  constructor() {
    super();

    this.generatePrimaryText = this.generatePrimaryText.bind(this);
  }

  componentWillMount() {
    const { loadData } = this.props;
    loadData();
  }

  generatePrimaryText(name, start, end, flight) {
    const formatPlace = ({ country, city }) => `${country}, ${city}`;

    return <Flex auto>
      <Box mx={2}><b>{name}</b></Box>
      <Box mx={2}>מתחיל ב {formatPlace(start)}</Box>
      <Box mx={2}>נגמר ב {formatPlace(end)}</Box>
      <Box><FlightIndicator flights={flight} /></Box>
    </Flex>;
  }

  render() {
    const { tripParts = [] } = this.props;

    return <div>
      <List>
        {tripParts.map(({ id, name, start, end, days, flight }) => <ListItem button
          key={id}
          divider={true}
          onClick={() => redirect(`tripPart/${id}`)}>
          <ListItemText
            primary={this.generatePrimaryText(name, start, end, flight)}
            secondary={`${days} ימים`} />
          <ListItemSecondaryAction>
            <ModeEditIcon onClick={() => redirect(`tripPart/${id}/edit`)} />
          </ListItemSecondaryAction>
        </ListItem>)}
      </List>
      <NewButton path={'tripPart/new/'} />
    </div>;
  }
}
