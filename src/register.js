import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
//import {useNavigation} from '@react-navigation/native';
//import StandardButton from '../../components/buttons/standardButton';
class Register extends Component {
  //const navigation = useNavigation();
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />

        <View>
          <Text style={styles.heading}>Welcome Learner!</Text>
        </View>
        <View>
          <Text style={styles.Subheading}>
            Register now for delightful knowledge
          </Text>
        </View>

        <View>
          <Text style={styles.text1}>Name</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            //placeholder=""
            placeholderTextColor="#8D98AF"
            autoCapitalize="none"
            // onChangeText={this.handleEmail}
          />
          <Text style={styles.text1}>Email</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Enter Email"
            placeholderTextColor="#8D98AF"
            autoCapitalize="none"
            // onChangeText={this.handleEmail}
          />
          <Text style={styles.text1}>Password</Text>

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Enter Password"
            placeholderTextColor="#8D98AF"
            autoCapitalize="none"
            // onChangeText={this.handlePassword}
          />

          <TouchableOpacity
            style={styles.Button}
            activeOpacity={0.5}
            // onPress={onPress}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00355D',
  },
  heading: {
    fontFamily: 'PlayfairDisplay-Bold',
    fontStyle: 'normal',
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
  },
  Subheading: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 14,
    color: '#E1E4EA',
    textAlign: 'center',
    margin: 20,
    marginVertical: 4,
    marginBottom: 20,
  },
  input: {
    marginTop: 10,
    marginBottom: 20,
    height: 50,
    width: 335,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
  },
  text1: {
    color: '#FFFFFF',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 14,
  },
  Button: {
    marginTop: 10,
    backgroundColor: '#52B4FF',
    height: 50,
    width: 335,
    alignItems: 'center',
    borderRadius: 8,
  },

  buttonText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 14,
    color: '#00355D',
    textAlign: 'center',
    fontWeight: '600',
    paddingVertical: 15,
  },
});
export default Register;
