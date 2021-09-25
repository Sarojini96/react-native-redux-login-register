/* eslint-disable no-alert */
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
//import {useNavigation} from '@react-navigation/native';
import {dispatch, connect} from 'react-redux';
import {getUsers} from '../actions/usersActions';

import {testloginactions} from '../actions/loginAction';
//import StandardButton from '../../components/buttons/standardButton';

class SignIn extends Component {
  // const navigation = useNavigation();
  constructor(props) {
    super(props);

    // reset login status
    //this.props.logout();

    this.state = {
      email: '',
      password: '',
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({submitted: true});
    const {email, password} = this.state;
    if (email && password) {
      this.props.login(email, password);
    }
  }
  render() {
    const {login} = this.props.login;
    console.log(login);
    const {loggingIn} = this.props;
    const {email, password, submitted} = this.state;
    /* const login = e => {
      console.log(e);
      e.preventDefault();
      console.log('clicked');
      alert('action registered');
      dispatch(loginUsers())
        .then(() => {
          console.log('test');
        })
        .catch(() => {
          console.log('test');
        });
    };*/
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />

        <View>
          <Text style={styles.heading}>Welcome back!</Text>
        </View>
        <View>
          <Text style={styles.Subheading}>
            Enter email and password to sign in
          </Text>
        </View>

        <View>
          <Text style={styles.text1}>Email</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Enter Email"
            placeholderTextColor="#8D98AF"
            autoCapitalize="none"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Text style={styles.text1}>Password</Text>

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Enter Password"
            placeholderTextColor="#8D98AF"
            autoCapitalize="none"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <TouchableOpacity
          //onPress={() => navigation.navigate('ForgotPassword')}
          >
            <Text style={styles.text2}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Button}
            activeOpacity={0.5}
            //  onPress={e => login}
            onPress={this.handleSubmit}>
            <Text style={styles.buttonText}>SignIn</Text>
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
  text2: {
    color: '#FFFFFF',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 14,
    left: '65%',
    marginBottom: 20,
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

//const connectedLoginPage = connect(mapState, actionCreators)(SignIn);
//export {connectedLoginPage as SignIn};
const mapStateToProps = state => ({login: state.login});

export default connect(mapStateToProps, {testloginactions})(SignIn);
