import React, {Component} from 'react';
import {View, Dimensions, SafeAreaView} from 'react-native';
import {Header, Left, Body, Right, Button, Icon, Title} from 'native-base';

export default class CustomHeader extends React.Component {
  render() {
    let {title, isHome} = this.props;
    return (
      <Header>
        <Left>
          {isHome ? (
            <Button
              transparent
              onPress={() => {
                this.props.navigation.openDrawer();
                console.log('Menu top navigate', this.props.navigation);
              }}>
              <Icon name="menu" />
            </Button>
          ) : (
            <Button transparent>
              <Icon
                name="arrow-back"
                onPress={() => this.props.navigation.goBack()}
              />
            </Button>
          )}
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right>
          {/* <Button transparent>
            <Icon name="menu" />
          </Button> */}
        </Right>
      </Header>
    );
  }
}
