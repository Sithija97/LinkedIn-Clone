import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import CardView from 'react-native-cardview';
import DashboardScreen from './Dashboard';
export default class HomeScreen extends React.Component {
  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({user: null}); // Remember to remove the user from your app's state as well
      this.props.navigation.navigate('Login');
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const userInfo = this.props.navigation.getParam('userInfo');

    return (
      <View style={styles.Container}>
        <CardView
          cardElevation={5}
          cardMaxElevation={5}
          cornerRadius={10}
          style={styles.Card}>
          <View style={styles.Container}>
            {userInfo && userInfo.user && (
              <Image
                style={{width: 100, height: 100, borderRadius: 100}}
                source={{uri: userInfo.user.photo}}
              />
            )}
            <Text style={styles.userDetails}>
              User Name: {userInfo && userInfo.user && userInfo.user.name}
            </Text>
            <Text style={styles.userDetails}>
              E-mail: {userInfo && userInfo.user && userInfo.user.email}
            </Text>
          </View>
        </CardView>
        <DashboardScreen />

        <View style={styles.button}>
          <Button title="Logout" onPress={this.signOut}></Button>
        </View>

        <Image source={require('./img/Save.jpg')} style={styles.Image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    backgroundColor: '#ffffff',
  },
  Background: {
    flex: 1,
    resizeMode: 'cover',
  },
  Image: {
    height: 350,
    width: 350,
    marginTop: 70,
    marginLeft: 40,
    marginBottom: -10,
    padding: 20,
  },
  Card: {
    height: 150,
    width: 380,
    marginTop: 80,
    marginBottom: 60,
    backgroundColor: 'transparent',
  },
  button: {
    marginTop: 60,
  },
  userDetails:{
    fontWeight:'bold'
  }
});
