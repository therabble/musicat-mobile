import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles'

export default class Navigation extends Component {
    static navigationOptions = {
    };

    render() {
        return (
            <View style={{backgroundColor: '#ffffff', flex: 1,}}>
                <TouchableOpacity style={style=styles.navigationbox} onPress={() => this.props.navigation.navigate('Main')}>
                    <Text style={styles.navigationtext} >Madison Public Library</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style=styles.navigationbox} onPress={() => this.props.navigation.navigate('Main')}>
                    <Text style={styles.navigationtext} >Other Library</Text>
                </TouchableOpacity>
            </View>
        );
    }
  }