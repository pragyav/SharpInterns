import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity
} from 'react-native';
import AppTheme from "../theme/AppTheme";
import Icon from 'react-native-vector-icons/Ionicons';


/*
* Class: Header
* */
export default class Header extends Component {
    //-- Constructor --
    constructor(props) {
        super(props);

        this.navigation = props.navigation;

        this.state = {

        }
    }

    actionDrawer() {
        this.navigation.navigate('DrawerOpen');
    }


    //-- Render --
    render() {
        let props = this.props;
        let titleStyle = (props.titleStyle) ? props.titleStyle : null;
        let titleText = (props.titleText) ? props.titleText : null;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=> this.actionDrawer()}>
                    <Icon name={'md-menu'} size={30} color={AppTheme.COLOR.HEADER_TINT_COLOR}/>
                </TouchableOpacity>
                <Text style={[styles.title, titleStyle]}>{titleText}</Text>
                <View style={{ width: 30 }}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 64,
        backgroundColor: AppTheme.COLOR.HEADER_BACKGROUND,
        paddingTop: 20,
        paddingLeft: 10,
    },
    title: {
        color: AppTheme.COLOR.TEXT,
        fontSize: AppTheme.FONT_SIZE.MEDIUM,
        fontWeight: 'bold',
    }
});