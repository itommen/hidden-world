import React from 'react';
import { List, ListItem } from 'material-ui/List';
import { Flex, Box } from 'reflexbox';

import NewButton from '../../common/new-button';

export default class MainTripPart extends React.Component {
  constructor() {
    super();

    this.generatePrimaryText = this.generatePrimaryText.bind(this);
  }

  componentWillMount() {
    const { loadData } = this.props;
    loadData();
  }

  generatePrimaryText(name, start, end) {
    const formatPlace = ({ country, city }) => `${country}, ${city}`;

    return <Flex auto>
      <Box mx={2}><b>{name}</b></Box>
      <Box mx={2}>מתחיל ב {formatPlace(start)}</Box>
      <Box mx={2}>נגמר ב {formatPlace(end)}</Box>
    </Flex>;
  }

  render() {
    const { tripParts = [] } = this.props;

    return <div>
      <List>
        {tripParts.map(({ id, name, start, end, days }) => <ListItem
          key={id}
          primaryText={this.generatePrimaryText(name, start, end)}
          secondaryText={`${days} ימים`} />)}
      </List>
      <NewButton path={'tripPart/new/'} />
    </div>;
  }
}
