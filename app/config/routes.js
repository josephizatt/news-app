import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AppLoading } from 'expo';

import { Scene, Router, Stack } from 'react-native-router-flux';

import Home from '../modules/home/scenes/Home';
import Article from '../modules/home/scenes/Article';
import Source from '../modules/home/scenes/Source';

import { color, navTitleStyle } from "../styles/theme";

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            isReady: false
        }
    }

    componentDidMount() {
        var me = this;
        setTimeout(function(){
            me.setState({isReady: true})
        },1000)
    }

    render() {
        if(!this.state.isReady)
            return <AppLoading/>

        return (
            <Router>
                <Stack  key="root"
                        navigationBarStyle={{backgroundColor: "#fff"}}
                        titleStyle={navTitleStyle}
                        backButtonTintColor={color.black}>
                    <Scene key="Main" component={Main} title="Main" initial/>
                    <Scene key="Home" component={Home} title="Headlines" initial/>
                    <Scene key="Article" component={Article} title=""/>
                    <Scene key="Source" component={Source} title=""/>
                </Stack>
            </Router>
        )
    }
}

class Main extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  