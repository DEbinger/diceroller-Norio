import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
       } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Button } from './Button';
import * as Animatable from 'react-native-animatable';
import { StackNavigator } from 'react-navigation';

const {width, height} = Dimensions.get('window')

export default class Zahed extends React.Component {
  static navigationOptions = {
    title: 'Katana 13 +19',
  };
  constructor(props) {
    super(props);

    this.state={

      // This is the Display number value, prior to button press
      NumberHolderD20S1 : 20,
      NumberHolderD8S1 : 8,
      NumberHolderTotalS1 : 'DAM',
      NumberHolderTotalD20S1 : 'T20',
    }
  }

  handleButtonPress=()=> {
    let D20S1 = Math.floor(Math.random() * 20) + 1 ;
    let D20TotalS1 = D20S1 + 13;
    let diceroll8S1a = Math.floor(Math.random() * 8) + 1 ;
    let diceroll8S1b = Math.floor(Math.random() * 8) + 1 ;
    let TotalS1 = diceroll8S1a + diceroll8S1b + 19;

  this.setState({

    NumberHolderD20S1 : D20S1,
    NumberHolderD8S1 : diceroll8S1a,
    NumberHolderTotalS1 : TotalS1,
    NumberHolderTotalD20S1 : D20TotalS1,
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    const D20S1Style = this.state.NumberHolderD20S1 === 20 | this.state.NumberHolderD20S1 === 19 | this.state.NumberHolderD20S1 === 18 | this.state.NumberHolderD20S1 === 17 | this.state.NumberHolderD20S1 === 16 | this.state.NumberHolderD20S1 === 15 | this.state.NumberHolderD20S1 === 1 ? styles.bottomItemInner20picked : styles.bottomItemInner20;

    return (
      <ImageBackground source={require('../images/Norio3.jpg')} style={styles.container}>
        <Animatable.View animation="bounce" easing="ease-out" iterationCount="5" style={styles.center} >
            <Button style={styles.button} text="Attack!"
            onPress={() => this.handleButtonPress()}/>
        </Animatable.View>

          <View style={styles.bottom}>
              <View style={styles.bottomItem}>
                <Animatable.Text animation="fadeInUpBig" style={D20S1Style} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderD20S1}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInUpBig" style={styles.bottomItemInnerTotalD20} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalD20S1}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInUpBig" style={styles.bottomItemInnerTotal} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalS1}</Animatable.Text>
              </View>
          </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      flexWrap: 'wrap',
      backgroundColor: '#5386E4',
      padding: 5,
    },
    textStyle: {
      color: 'goldenrod',
      textAlign: 'center'
    },
    center: {
      height: '40%',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',

    },
    bottom: {
      height: '55%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 2,
    },
    bottomItem: {
      width: Dimensions.get('window').width / 1 -7,
      height: 60,
      padding: 5
    },
    bottomItemTotal: {
      width: Dimensions.get('window').width / 1 -7,
      height: 60,
      padding: 5
    },
    bottomItemInner20: {
      flex: 1,
      backgroundColor: 'white',
      borderColor: '#444054',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 45,
      fontWeight: '900',
      color: '#d2691e',
    },
    bottomItemInner20picked: {
      flex: 1,
      backgroundColor: 'red',
      borderColor: '#444054',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 45,
      fontWeight: '900',
      color: 'white',
    },
    bottomItemInnerTotal: {
      flex: 1,
      backgroundColor: 'grey',
      borderColor: '#340068',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 45,
      fontWeight: '900',
      color: 'papayawhip',
    },
    bottomItemInnerTotalD20: {
      flex: 1,
      backgroundColor: 'firebrick',
      borderColor: '#340068',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 45,
      fontWeight: '900',
      color: 'violet',
    },
});
