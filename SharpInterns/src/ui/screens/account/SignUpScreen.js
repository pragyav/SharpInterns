import React, { Component } from 'react';
import {
    View,Text, Image, ScrollView, TouchableOpacity, CheckBox, StatusBar
} from 'react-native';
import AccountStyle from './AccountStyle';
import AppStyle from "../../theme/AppStyle";
import TextField from "../../components/TextField";
import SButton from "../../components/SButton";
import AppTheme from "../../theme/AppTheme";
import Icon from 'react-native-vector-icons/Ionicons';
import RouteConstants from "../../../app/RouteConstants";
import {AlertConstants, AlertUtils} from "../../utilsui/AlertUtils";
import Validator from "../../utilsui/Validator";


/*
* Class Definition: SignUp
*
* */
export default class SignUpScreen extends Component {

    //-- Constructor ---
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            phone: '',
        }
    }


    //-- Component Life Cycle --
    componentWillMount() {

    }

    //-- Action --
    actionSignUp() {
        let param = this.getParams();

        if (param) {
            //TODO:- API Implementations


        }

    }


    //-- Validations --
    getParams() {
        let validator = new Validator();
        let param = {};
        let msg = '';

        //name
        let name = this.state.name;
        if (validator.isEmpty(name)) {
            param['name'] = name;
        }
        else {
            msg = msg + '\n- ' + AlertConstants.MESSAGE.VALIDATION_ERROR_NAME;
        }

        //email
        let email = this.state.email;
        if (validator.isEmpty(email) && validator.isValidEmail(email)) {
            param['email'] = email;
        }
        else {
            msg = msg + '\n- ' + AlertConstants.MESSAGE.VALIDATION_ERROR_EMAIL;
        }

        //Password
        let password = this.state.password;
        if (validator.isEmpty(password)) {
            param['password'] = password;
        }
        else {
            msg = msg + '\n- ' + AlertConstants.MESSAGE.VALIDATION_ERROR_PASSWORD;
        }

        //phone
        let phone = this.state.phone;
        if (validator.isEmpty(phone)) {
            param['phone'] = phone;
        }
        else {
            msg = msg + '\n- ' + AlertConstants.MESSAGE.VALIDATION_ERROR_PHONE;
        }

        if (msg.length > 0) {
            //show error
            AlertUtils.showOkAlert(AlertConstants.TITLE.VALIDATION_ERROR, msg);
            return null;
        }

        return param;
    }


    //-- Render --
    render() {
        return (
            <View style={AppStyle.container}>
                <Image style={AppStyle.bgImage} source={require('../../../resources/images/sign_up_bg.jpg')} />
                <View style={[AppStyle.renderMainView, AccountStyle.innerItems]}>
                    <Image style={{ marginTop: 20}} source={require('../../../resources/images/logo.png')}/>
                    <View style={{ height: 20 }}/>
                    <ScrollView>

                        <TextField
                            placeholder={'Name'}
                            value={this.state.name}
                            keyboardType={'default'}
                            onChangeText={(text) => {
                                this.setState({ name : text })
                            }}
                        />

                        <TextField
                            placeholder={'Email'}
                            value={this.state.email}
                            keyboardType={'email-address'}
                            onChangeText={(text) => {
                                this.setState({ email : text })
                            }}
                        />

                        <TextField
                            placeholder={'Password'}
                            value={this.state.password}
                            secureTextEntry={true}
                            onChangeText={(text) => {
                                this.setState({ password : text })
                            }}
                        />

                        <TextField
                            placeholder={'Phone'}
                            value={this.state.phone}
                            keyboardType={'phone-pad'}
                            onChangeText={(text) => {
                                this.setState({ phone : text })
                            }}
                        />

                        <SButton
                            style={{ paddingTop: 24 }}
                            textStyle={{}}
                            backgroundColor={AppTheme.COLOR.BUTTON_2}
                            text={'Sign Up'}
                            onPress={() => {
                                this.actionSignUp();
                            }}
                        />

                    </ScrollView>
                </View>
            </View>
        );
    }
}