import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Dimensions, TouchableOpacity
} from 'react-native';
import AppTheme from "../theme/AppTheme";

const {height, width} = Dimensions.get('window');

export default class SButton extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let props = this.props;
        return(
            <TouchableOpacity
                style={[styles.touchableOpacity, props.style]}
                onPress={() => {
                    if (props.onPress) {
                        props.onPress()
                    }
                }}
                >
                <View style={[styles.container, { backgroundColor: props.backgroundColor}]}>
                    <Text style={[styles.titleText, props.textStyle]}>{ props.text }</Text>
                </View>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        padding: 12,
        paddingLeft: 32,
        paddingRight: 32,
       // backgroundColor: 'green',
        borderRadius: 0
    },
    touchableOpacity: {

    },
    titleText: {
        fontSize: AppTheme.FONT_SIZE.MEDIUM,
        textAlign: 'center'
    }
});