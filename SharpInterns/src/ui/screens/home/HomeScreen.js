import React, { Component } from 'react';
import {
    View, Text, StatusBar
} from 'react-native';
import Header from "../../components/Header";
import AppTheme from "../../theme/AppTheme";

/*
* Class : Home Screen
* */

export default class HomeScreen extends Component {
    //-- Constructor --
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    //-- Component Life Cycle --


    //-- Actions --


    //-- Navigations --


    //-- Render View --
    render() {
        return (
            <View>
                <StatusBar barStyle={AppTheme.STATUS_BAR_STYLE}/>
                <Header
                    titleText={'Home'}
                    navigation={this.props.navigation}
                />
                <Text>Home</Text>
            </View>
        );
    }

}
