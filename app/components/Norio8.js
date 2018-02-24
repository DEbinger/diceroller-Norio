import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  Dimensions,
       } from 'react-native';
import { Button } from './Button';
import * as Animatable from 'react-native-animatable';

export default class Zahed8 extends React.Component {
  static navigationOptions = {
    title: '15|15|15|10 +10/7',
  };
  constructor(props) {
    super(props);

 imgClick = () => {
    Alert.alert(
  'Row 1 Base D20 roll \n\n Row 2 D20 + 15|15|15|10 TWF \n\n Row 3 Dagger \n\n Row 4 \n Sneak Attack 5d8 Total \n\n Row 5 = Rows 3 & 4 + 10/7 = Total Damage',
  'Enjoy!',
  [
    {text: 'T20 = Total D20 Roll + Haste + Song + TWF', onPress: () => console.log('D20 Roll Total')},
    {text: '888 = Total Damage, Song + Dagger + SA', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}
  ],
  { cancelable: false }
)
  }

    this.state={

      // This is the Display number value, prior to button press
      NumberHolderD20S1 : 20,
      NumberHolderD20S2 : 20,
      NumberHolderD20S3 : 20,
      NumberHolderD20S4 : 20,
      NumberHolderD8S1 : 8,
      NumberHolderD8S2 : 8,
      NumberHolderD8S3 : 8,
      NumberHolderD8S4 : 8,
      NumberHolderD4S1 : 4,
      NumberHolderD4S2 : 4,
      NumberHolderD4S3 : 4,
      NumberHolderD4S4 : 4,
      NumberHolderTotalD20S1 : 'T20',
      NumberHolderTotalD20S2 : 'T20',
      NumberHolderTotalD20S3 : 'T20',
      NumberHolderTotalD20S4 : 'T20',
      NumberHolderTotalS1 : 888,
      NumberHolderTotalS2 : 888,
      NumberHolderTotalS3 : 888,
      NumberHolderTotalS4 : 888,
    }
  }

  handleButtonPress=()=> {
    let D20S1 = Math.floor(Math.random() * 20) + 1;
    let D20S2 = Math.floor(Math.random() * 20) + 1;
    let D20S3 = Math.floor(Math.random() * 20) + 1;
    let D20S4 = Math.floor(Math.random() * 20) + 1;
    let D20TotalS1 = D20S1 + 15;
    let D20TotalS2 = D20S2 + 15;
    let D20TotalS3 = D20S3 + 15;
    let D20TotalS4 = D20S4 + 10;
    let diceroll8S1a = Math.floor(Math.random()  * 8) +1;
    let diceroll8S1b = Math.floor(Math.random()  * 8) +1;
    let diceroll8S1c = Math.floor(Math.random()  * 8) +1;
    let diceroll8S1d = Math.floor(Math.random()  * 8) +1;
    let diceroll8S1e = Math.floor(Math.random()  * 8) +1;
    let D8S1 = diceroll8S1a + diceroll8S1b +
      diceroll8S1c + diceroll8S1d + diceroll8S1e;
    let diceroll8S2a = Math.floor(Math.random()  * 8) +1;
    let diceroll8S2b = Math.floor(Math.random()  * 8) +1;
    let diceroll8S2c = Math.floor(Math.random()  * 8) +1;
    let diceroll8S2d = Math.floor(Math.random()  * 8) +1;
    let diceroll8S2e = Math.floor(Math.random()  * 8) +1;
    let D8S2 = diceroll8S2a + diceroll8S2b +
      diceroll8S2c + diceroll8S2d + diceroll8S2e;
    let diceroll8S3a = Math.floor(Math.random()  * 8) +1;
    let diceroll8S3b = Math.floor(Math.random()  * 8) +1;
    let diceroll8S3c = Math.floor(Math.random()  * 8) +1;
    let diceroll8S3d = Math.floor(Math.random()  * 8) +1;
    let diceroll8S3e = Math.floor(Math.random()  * 8) +1;
    let D8S3 = diceroll8S3a + diceroll8S3b +
      diceroll8S3c + diceroll8S3d + diceroll8S3e;
    let diceroll8S4a = Math.floor(Math.random()  * 8) +1;
    let diceroll8S4b = Math.floor(Math.random()  * 8) +1;
    let diceroll8S4c = Math.floor(Math.random()  * 8) +1;
    let diceroll8S4d = Math.floor(Math.random()  * 8) +1;
    let diceroll8S4e = Math.floor(Math.random()  * 8) +1;
    let D8S4 = diceroll8S4a + diceroll8S4b +
      diceroll8S4c + diceroll8S4d + diceroll8S4e;
    let D4S1 = Math.floor(Math.random() * 4) + 1 ;
    let D4S2 = Math.floor(Math.random() * 4) + 1 ;
    let D4S3 = Math.floor(Math.random() * 4) + 1 ;
    let D4S4 = Math.floor(Math.random() * 4) + 1 ;
    let TotalS1 = D8S1 + D4S1 + 10;
    let TotalS2 = D8S2 + D4S2 + 10;
    let TotalS3 = D8S3 + D4S3 + 7;
    let TotalS4 = D8S4 + D4S4 + 10;

  this.setState({

    NumberHolderD20S1 : D20S1,
    NumberHolderD20S2 : D20S2,
    NumberHolderD20S3 : D20S3,
    NumberHolderD20S4 : D20S4,
    NumberHolderD8S1 : D8S1,
    NumberHolderD8S2 : D8S2,
    NumberHolderD8S3 : D8S3,
    NumberHolderD8S4 : D8S4,
    NumberHolderD4S1 : D4S1,
    NumberHolderD4S2 : D4S2,
    NumberHolderD4S3 : D4S3,
    NumberHolderD4S4 : D4S4,
    NumberHolderTotalS1 : TotalS1,
    NumberHolderTotalS2 : TotalS2,
    NumberHolderTotalS3 : TotalS3,
    NumberHolderTotalS4 : TotalS4,
    NumberHolderTotalD20S1 : D20TotalS1,
    NumberHolderTotalD20S2 : D20TotalS2,
    NumberHolderTotalD20S3 : D20TotalS3,
    NumberHolderTotalD20S4 : D20TotalS4,
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    const D20S1Style = this.state.NumberHolderD20S1 === 20 | this.state.NumberHolderD20S1 === 19 | this.state.NumberHolderD20S1 === 1 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    const D20S2Style = this.state.NumberHolderD20S2 === 20 | this.state.NumberHolderD20S2 === 19 | this.state.NumberHolderD20S2 === 1 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    const D20S3Style = this.state.NumberHolderD20S3 === 20 | this.state.NumberHolderD20S3 === 19 | this.state.NumberHolderD20S3 === 1 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    const D20S4Style = this.state.NumberHolderD20S4 === 20 | this.state.NumberHolderD20S4 === 19 | this.state.NumberHolderD20S4 === 1 ? styles.bottomItemInner20picked : styles.bottomItemInner20;

    return (
      <View style={styles.container}>

          <View style={styles.top}>
            <TouchableOpacity onPress={imgClick} style={styles.profileimage}>
              <Image
                style={styles.image}
                source={require('../images/Zahed8.jpg')}
              />
            </TouchableOpacity>

          </View>

          <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.center} >
            <Button style={styles.button} text="Attack!"
            onPress={() => this.handleButtonPress()}

            />

          </Animatable.View>

          <View style={styles.bottom}>

              <View style={styles.bottomItem}>
                <Animatable.Text animation="fadeInDownBig" style={D20S1Style} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderD20S1}</Animatable.Text>
              </View>

              <View style={styles.bottomItem}>
                <Animatable.Text animation="fadeInDownBig" style={D20S2Style} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderD20S2}</Animatable.Text>
              </View>

              <View style={styles.bottomItem}>
                <Animatable.Text animation="fadeInDownBig" style={D20S3Style} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderD20S3}</Animatable.Text>
              </View>

              <View style={styles.bottomItem}>
                <Animatable.Text animation="fadeInDownBig" style={D20S4Style} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderD20S4}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInDownBig" style={styles.bottomItemInnerTotalD20} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalD20S1}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInDownBig" style={styles.bottomItemInnerTotalD20} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalD20S2}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInDownBig" style={styles.bottomItemInnerTotalD20} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalD20S3}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInDownBig" style={styles.bottomItemInnerTotalD20} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalD20S4}</Animatable.Text>
              </View>

              <View style={styles.bottomItem}>
                <Animatable.Text animation="fadeInDownBig" style={styles.bottomItemInner8} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderD8S1}</Animatable.Text>
              </View>

              <View style={styles.bottomItem}>
                <Animatable.Text animation="fadeInDownBig" style={styles.bottomItemInner8} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderD8S2}</Animatable.Text>
              </View>

              <View style={styles.bottomItem}>
                <Animatable.Text animation="fadeInDownBig" style={styles.bottomItemInner8} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderD8S3}</Animatable.Text>
              </View>

              <View style={styles.bottomItem}>
                <Animatable.Text animation="fadeInDownBig" style={styles.bottomItemInner8} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderD8S4}</Animatable.Text>
              </View>

              <View style={styles.bottomItem}>
                <Animatable.Text animation="fadeInDownBig" style={styles.bottomItemInner4} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderD4S1}</Animatable.Text>
              </View>

              <View style={styles.bottomItem}>
                <Animatable.Text animation="fadeInDownBig" style={styles.bottomItemInner4} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderD4S2}</Animatable.Text>
              </View>

              <View style={styles.bottomItem}>
                <Animatable.Text animation="fadeInDownBig" style={styles.bottomItemInner4} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderD4S3}</Animatable.Text>
              </View>

              <View style={styles.bottomItem}>
                <Animatable.Text animation="fadeInDownBig" style={styles.bottomItemInner4} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderD4S4}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInDownBig" style={styles.bottomItemInnerTotal} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalS1}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInDownBig" style={styles.bottomItemInnerTotal} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalS2}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInDownBig" style={styles.bottomItemInnerTotal} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalS3}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInDownBig" style={styles.bottomItemInnerTotal} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalS4}</Animatable.Text>
              </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#34E4EA',
      padding: 5,
    },
    top: {
      height: '25%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#34E4EA',
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 2,
    },
    profileimage: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      flex: 1,
      maxHeight: '84%',
      maxWidth: '65%',
    },
    center: {
      height: '10%',
      backgroundColor: '#34E4EA',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',

    },
    bottom: {
      height: '55%',
      backgroundColor: '#34E4EA',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 2,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    bottomItem: {
      width: Dimensions.get('window').width / 4 -6,
      height: 60,
      padding: 5
    },
    bottomItemTotal: {
      width: Dimensions.get('window').width / 4 -6,
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
    bottomItemInner8: {
      flex: 1,
      backgroundColor: 'white',
      borderColor: '#444054',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 45,
      fontWeight: '900',
      color: '#8a2be2',
    },
    bottomItemInner4: {
      flex: 1,
      backgroundColor: 'white',
      borderColor: '#444054',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 45,
      fontWeight: '900',
      color: '#8a2be2',
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
