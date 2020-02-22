import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import CardView from 'react-native-cardview';

export default class DashboardScreen extends React.Component {
  render() {
    return (
      <View style={styles.Container}>
        <CardView
          cardElevation={5}
          cardMaxElevation={5}
          cornerRadius={10}
          style={styles.Card}>
          <Text style={styles.Values}>Income : 600  | Expenses: 200  | Savings: 400</Text>
        </CardView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  Card: {
    height: 100,
    width: 380,
    marginTop:70,
    marginBottom:60,
    backgroundColor:'transparent',
  },
  Values:{
    padding:37, 
    fontWeight:'bold' , 
    color:'blue'}
});
