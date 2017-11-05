import React, { Component } from 'react';
import {
    View, TextInput, StyleSheet, Dimensions
} from 'react-native';
import AppTheme from "../theme/AppTheme";

const {height, width} = Dimensions.get('window');

export default class TextField extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let props = this.props;
        return(
          <View style={styles.container}>
              <TextInput
                  style={[styles.input, props.style]}
                  placeholder={props.placeholder}
                  placeholderTextColor={'white'}
                  value={props.defaultValue}
                  underlineColorAndroid={'transparent'}
                  {...props}
              />
          </View>
        );
    }
}


const styles = StyleSheet.create({
   container: {
       flex: 1,
       borderBottomWidth: 1,
       borderBottomColor: AppTheme.COLOR.BORDER,
       width: width - (width / 4),
       padding: 10,
       marginTop: 10,
   },
    input: {
        height: 30,
        textAlign: 'center',
        color: AppTheme.COLOR.TEXT,
        fontSize: AppTheme.FONT_SIZE.MEDIUM,
    }
});