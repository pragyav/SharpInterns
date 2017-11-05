import {
    StyleSheet
} from 'react-native';
import AppTheme from "../../theme/AppTheme";

const AccountStyle = StyleSheet.create({
    innerItems: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    childView: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        color: AppTheme.COLOR.TEXT,
        fontSize: AppTheme.FONT_SIZE.SMALL
    },
    separatorH: {
        flex: 1,
        height: 1,
        backgroundColor: 'white'
    }

});

export default AccountStyle;