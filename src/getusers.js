import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUsers} from '../actions/usersActions';

import {Text, View, StyleSheet} from 'react-native';

class users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const {users} = this.props.users;
    console.log(users);

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>{users.first_name}</Text>
        <Text style={styles.Subheading}>{users.email}</Text>
        <Text style={styles.Subheading}>{users.status}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({users: state.users});

export default connect(mapStateToProps, {getUsers})(users);
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
});
