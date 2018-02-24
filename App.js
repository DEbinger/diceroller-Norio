import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
  Dimensions,
       } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Norio from './app/components/Norio';
import Norio2 from './app/components/Norio2';
import Norio3 from './app/components/Norio3';
import Norio4 from './app/components/Norio4';
import Norio5 from './app/components/Norio5';
import Norio6 from './app/components/Norio6';
import * as Animatable from 'react-native-animatable';
import { StackNavigator } from 'react-navigation';

EStyleSheet.build();

class LogoTitle1 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Norio.jpg')}
      />
    );
  }
}

class LogoTitle2 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Norio2.jpg')}
      />
    );
  }
}

class LogoTitle3 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Norio3.jpg')}
      />
    );
  }
}

class LogoTitle4 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Norio4.jpg')}
      />
    );
  }
}

class LogoTitle5 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Norio5.jpg')}
      />
    );
  }
}

class LogoTitle6 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Norio6.jpg')}
      />
    );
  }
}

class NorioHomeScreen extends React.Component {
  static navigationOptions = {
    title: 'NORIO',
  };
  render (){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.homeContainer}>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Norio')}><LogoTitle1 />Katana{"\n"}Power Attack{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Norio2')}><LogoTitle2 />Katana{"\n"}Power Attack{"\n"}Haste{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Norio3')}><LogoTitle3 />Katana{"\n"}Power Attack{"\n"}Vital Strike{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Norio4')}><LogoTitle4 />Naginata{"\n"}Power Attack{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Norio5')}><LogoTitle5 />Naginata{"\n"}Power Attack{"\n"}Haste{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Norio6')}><LogoTitle6 />Naginata{"\n"}Power Attack{"\n"}Vital Strike{"\n"}
          </Text>
        </ScrollView>
      </View>
    )
  }
}

const NavigationApp = StackNavigator({
  // Home: { screen: Login },
  NorioHome: { screen: NorioHomeScreen },
  Norio: { screen: Norio },
  Norio2: { screen: Norio2 },
  Norio3: { screen: Norio3 },
  Norio4: { screen: Norio4 },
  Norio5: { screen: Norio5 },
  Norio6: { screen: Norio6 },
  }, {
    navigationOptions: {
      headerStyle: {
        marginTop: Expo.Constants.statusBarHeight
      }
    }
  })

export default class App extends React.Component {
  render() {
    return <NavigationApp />;
          <NorioHomeScreen />;
          <Norio />;
          <Norio2 />;
          <Norio3 />;
          <Norio4 />;
          <Norio5 />;
          <Norio6 />;
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      flexWrap: 'wrap',
      backgroundColor: '#50C878',
      alignContent: 'center',
      padding: 5,
    },
    homeContainer: {
      flex: 1,
      flexDirection: 'column',
      flexWrap: 'wrap',
      backgroundColor: '#50C878',
      alignContent: 'center',
      alignSelf: 'center',
      padding: 5,
    },
    logo: {
      marginTop: 5,
      width: 350,
      height: 500,
    },
    textStyle: {
      color: '#000066'
    }
});
