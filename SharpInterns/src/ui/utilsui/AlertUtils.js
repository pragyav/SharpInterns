import {
    Alert
} from 'react-native';

export class AlertUtils {

    static showOkAlert(title, message) {
        let action = [
            { text: 'Ok', onPress: () => console.log('Alert dismissed')}
        ];

        AlertUtils.showAlertWithActions(title, message, action);
    }


    static showAlertWithActions(title, message, actions) {
        Alert.alert(
            title,
            message,
            actions
        );
    }
}


export const AlertConstants = {
    TITLE: {
        DEFAULT: 'Message',
        ERROR: 'Error',
        VALIDATION_ERROR: 'Invalid'
    },
    MESSAGE: {
        VALIDATION_ERROR_NAME: 'Please enter Name',
        VALIDATION_ERROR_EMAIL: 'Please enter Email',
        VALIDATION_ERROR_PASSWORD: 'Please enter Password',
        VALIDATION_ERROR_PHONE: 'Please enter Phone'
    }
};