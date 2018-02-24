import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  Dimensions,
  ImageBackground
       } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Button } from './Button';
import * as Animatable from 'react-native-animatable';
import { StackNavigator } from 'react-navigation';

const {width, height} = Dimensions.get('window')

export default class Zahed extends React.Component {
  static navigationOptions = {
    title: 'Katana 14|14|9 +19',
  };
  constructor(props) {
    super(props);

    this.state={

      // This is the Display number value, prior to button press
      NumberHolderD20S1 : 20,
      NumberHolderD20S2 : 20,
      NumberHolderD20S3 : 20,
      NumberHolderD8S1 : 8,
      NumberHolderD8S3 : 8,
      NumberHolderD8S2 : 8,
      NumberHolderTotalS1 : 'DAM',
      NumberHolderTotalS2 : 'DAM',
      NumberHolderTotalS3 : 'DAM',
      NumberHolderTotalD20S1 : 'T20',
      NumberHolderTotalD20S2 : 'T20',
      NumberHolderTotalD20S3 : 'T20',
    }
  }

  handleButtonPress=()=> {
    let D20S1 = Math.floor(Math.random() * 20) + 1 ;
    let D20S2 = Math.floor(Math.random() * 20) + 1 ;
    let D20S3 = Math.floor(Math.random() * 20) + 1 ;
    let D20TotalS1 = D20S1 + 14;
    let D20TotalS2 = D20S2 + 14;
    let D20TotalS3 = D20S3 + 9;
    let diceroll8S1a = Math.floor(Math.random() * 8) + 1 ;
    let diceroll8S1b = Math.floor(Math.random() * 8) + 1 ;
    let diceroll8S1c = Math.floor(Math.random() * 8) + 1 ;
    let TotalS1 = diceroll8S1a + 19;
    let TotalS2 = diceroll8S1b + 19;
    let TotalS3 = diceroll8S1c + 19;

  this.setState({

    NumberHolderD20S1 : D20S1,
    NumberHolderD20S2 : D20S2,
    NumberHolderD20S3 : D20S3,
    NumberHolderD8S1 : diceroll8S1a,
    NumberHolderD8S2 : diceroll8S1b,
    NumberHolderD8S3 : diceroll8S1c,
    NumberHolderTotalS1 : TotalS1,
    NumberHolderTotalS2 : TotalS2,
    NumberHolderTotalS3 : TotalS3,
    NumberHolderTotalD20S1 : D20TotalS1,
    NumberHolderTotalD20S2 : D20TotalS2,
    NumberHolderTotalD20S3 : D20TotalS3,
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    const D20S1Style = this.state.NumberHolderD20S1 === 20 | this.state.NumberHolderD20S1 === 19 | this.state.NumberHolderD20S1 === 18 | this.state.NumberHolderD20S1 === 17 | this.state.NumberHolderD20S1 === 16 | this.state.NumberHolderD20S1 === 15 | this.state.NumberHolderD20S1 === 1 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    const D20S2Style = this.state.NumberHolderD20S2 === 20 | this.state.NumberHolderD20S2 === 19 | this.state.NumberHolderD20S2 === 18 | this.state.NumberHolderD20S2 === 17 | this.state.NumberHolderD20S2 === 16 | this.state.NumberHolderD20S2 === 15 | this.state.NumberHolderD20S2 === 1 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    const D20S3Style = this.state.NumberHolderD20S3 === 20 | this.state.NumberHolderD20S3 === 19 | this.state.NumberHolderD20S3 === 18 | this.state.NumberHolderD20S3 === 17 | this.state.NumberHolderD20S3 === 16 | this.state.NumberHolderD20S3 === 15 | this.state.NumberHolderD20S3 === 1 ? styles.bottomItemInner20picked : styles.bottomItemInner20;

    return (
      <ImageBackground source={require('../images/Norio2.jpg')} style={styles.container}>
        <Animatable.View animation="bounce" easing="ease-out" iterationCount="5" style={styles.center} >
            <Button style={styles.button} text="Attack!"
            onPress={() => this.handleButtonPress()}/>
        </Animatable.View>

          <View style={styles.bottom}>
              <View style={styles.bottomItem}>
                <Animatable.Text animation="fadeInUpBig" style={D20S1Style} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderD20S1}</Animatable.Text>
              </View>

              <View style={styles.bottomItem}>
                <Animatable.Text animation="fadeInUpBig" style={D20S2Style} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderD20S2}</Animatable.Text>
              </View>

              <View style={styles.bottomItem}>
                <Animatable.Text animation="fadeInUpBig" style={D20S3Style} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderD20S3}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInUpBig" style={styles.bottomItemInnerTotalD20} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalD20S1}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInUpBig" style={styles.bottomItemInnerTotalD20} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalD20S2}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInUpBig" style={styles.bottomItemInnerTotalD20} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalD20S3}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInUpBig" style={styles.bottomItemInnerTotal} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalS1}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInUpBig" style={styles.bottomItemInnerTotal} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalS2}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInUpBig" style={styles.bottomItemInnerTotal} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalS3}</Animatable.Text>
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
      height: '60%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 2,
    },
    bottomItem: {
      width: Dimensions.get('window').width / 3 -7,
      height: 60,
      padding: 5
    },
    bottomItemTotal: {
      width: Dimensions.get('window').width / 3 -7,
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
