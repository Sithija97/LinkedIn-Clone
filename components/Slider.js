/*This is an example of React Native App Intro Slider */
import React from 'react';
//import react in project
import { StyleSheet, View, Text, Image } from 'react-native';
//import all the required component
import AppIntroSlider from 'react-native-app-intro-slider';
//import AppIntroSlider to use it
export default class SliderScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      //To show the main page of the app
    };
  }
  _onDone = () => {
    this.setState({ showRealApp: true });
    this.props.navigation.navigate('Login');
  };
  _onSkip = () => {
    this.setState({ showRealApp: true });
    this.props.navigation.navigate('Login');
  };
  _renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100
        }}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  render() {
    //If false show the Intro Slides
    if (this.state.showRealApp) {
      //Real Application
      return (
        <Home/>
      );
    } else {
      //Intro slides
      return (
        <AppIntroSlider
          slides={slides}
          renderItem={this._renderItem}
          onDone={this._onDone}
          showSkipButton={true}
          onSkip={this._onSkip}
        />
      );
    }
  }
}
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 16,
    fontWeight:'bold',
    color: '#292f86',
    textAlign: 'center',
    paddingVertical: 30,
  },
  title: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
  },
});
 
const slides = [
  {
    key: 's1',
    //title: 'Mobile Recharge',
    text: 'Because Money matters..',
    image :require('./img/icon2.0.png'),
    backgroundColor:"#f1f2f6"
  },
  {
    key: 's2',
    // title: 'Special Events',
    text: 'Plan wisely with budgets, cut back on extras and start saving for your dreams.',
    image :require('./img/Events.png'),
    backgroundColor:"#f1f2f6"
  },
  {
    key: 's3',
    //title: 'Great Offers',
    text: 'Keep Track of every penny with in-depth reports.',
    image :require('./img/Reports.png'),
    backgroundColor:"#f1f2f6"
  },
  {
    key: 's4',
    //title: 'Best Deals',
    text: ' Manage your personal finance and achieve your financial goals',
    image :require('./img/Savings.png'),
    backgroundColor:"#f1f2f6"
  },
  {
    key: 's5',
    //title: 'Bus Booking',
    text: 'Find near-by Banks & ATMs',
    image :require('./img/Locations.png'),
    backgroundColor:"#f1f2f6"
  },
];