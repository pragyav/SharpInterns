import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity
} from 'react-native';


/*
* Class: Header
* */
export default class Header extends Component {
    //-- Constructor --
    constructor(props) {
        super(props);

        this.state = {

        }
    }



    //-- Render --
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello Menu</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {

    },

});