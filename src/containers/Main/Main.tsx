import React from 'react';
import { Container, Drawer, Content } from './styles';
import { Redirect } from 'react-router-dom';
import Meetings from '../Meetings';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const Main: React.FC = () => {
  return (
    <Container>
      <Drawer variant="permanent" anchor="left">
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Content>
        <Meetings />
      </Content>
    </Container>
  );
};

export default Main;
