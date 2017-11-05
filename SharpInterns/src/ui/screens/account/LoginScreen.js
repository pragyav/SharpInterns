import React, { Component } from 'react';
import {
    View, Text, Image, ScrollView, TouchableOpacity, CheckBox, StatusBar
} from 'react-native';
import { NavigationActions } from 'react-navigation';
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
* Class Definition: Login
*
* */
export default class LoginScreen extends Component {

    //-- Constructor ---
    constructor(props) {
        super(props);

        this.navigate = props.navigation.navigate;
        this.state = {
            checked: false
        };
    }


    //-- Component Life Cycle --
    componentWillMount() {

    }

    //--- Actions ---
    navigateToSignUp() {
        this.navigate(RouteConstants.SIGN_UP);
    }

 /*
    actionLogin() {
        let param = this.getParams();

        //--- remove this when api implemented
        this.navigateToTome()
        //---

        if (param) {
            //TODO:- API Implementations
            this.navigateToTome()
        }
    }

*/

    //Pragya Start :: actionLogin()

    actionLogin(){

        let param = this.getParams();

        if (param) {

        fetch("http://54.171.230.141:8080/api/users/authenticate",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },

            body: JSON.stringify({

                email: param.email, 
                password: param.password,
            })
        })

        .then((response) => response.json())
        
        .then((res => {

            if (res.success === true) {               
                this.navigateToTome();
            }

            else {
                alert(res.MESSAGE);
            }
        }))

        .done();

        }
    }

    //Pragya End :: actionLogin()

    //-- Validations --
    getParams() {
        let validator = new Validator();
        let param = {};
        let msg = '';

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

        if (msg.length > 0) {
            //show error
            AlertUtils.showOkAlert(AlertConstants.TITLE.VALIDATION_ERROR, msg);
            return null;
        }

        return param;
    }

    //-- Navigations --
    navigateToTome() {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: RouteConstants.HOME})
            ]
        })
        this.props.navigation.dispatch(resetAction)
    }

    //-- Render --
    render() {
        return (
            <View style={AppStyle.container}>
                    <StatusBar barStyle={AppTheme.STATUS_BAR_STYLE}/>
                    <Image style={AppStyle.bgImage} source={require('../../../resources/images/sign_up_bg.jpg')} />
                    <View style={[AppStyle.renderMainView, AccountStyle.innerItems]}>
                        <View style={AppStyle.statusBarBackgroundView}/>
                        <Image style={{ marginTop: 20}} source={require('../../../resources/images/logo.png')}/>
                        <View style={{ height: 20 }}/>
                        <ScrollView>

                            <TextField
                                placeholder={'Email'}
                            />

                            <TextField
                                placeholder={'Password'}
                            />

                            <View style={AccountStyle.childView}>
                                <SButton
                                    textStyle={{ color: 'white'}}
                                    backgroundColor={AppTheme.COLOR.BUTTON_1}
                                    text={'Login'}
                                    onPress={() => {
                                        this.actionLogin();
                                    }}
                                />
                                <SButton
                                    textStyle={{ }}
                                    backgroundColor={AppTheme.COLOR.BUTTON_2}
                                    text={'Sign Up'}
                                    onPress={() => {
                                        this.navigateToSignUp();
                                    }}
                                />
                            </View>

                            <View style={[AccountStyle.childView, {padding: 8}]}>
                                <TouchableOpacity style={{ flexDirection: 'row'}}>
                                    <Icon name={'ios-checkbox-outline'} size={20} color={'white'}/>
                                    <Text style={[AccountStyle.text, { paddingLeft: 6}]}>Remember Me</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={AccountStyle.text}>Forgot password</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={[AccountStyle.childView, { marginTop: 14 }]}>
                                <View style={AccountStyle.separatorH}/>
                                <Text style={{ color: 'white'}}> Or </Text>
                                <View style={AccountStyle.separatorH}/>
                            </View>

                            <SButton
                                style={{ paddingTop: 24 }}
                                textStyle={{ color: 'white', fontWeight: 'bold'}}
                                backgroundColor={AppTheme.COLOR.FACEBOOK}
                                text={'linkedin'}
                            />

                        </ScrollView>
                    </View>
                </View>
        );
    }
}

// 166.78.156.235:5000/v1/users/johndoe@sharpinterns.com/auth -X POST -H 'Content-type: application/json' -d '{"password": "P@ssw0rd"}