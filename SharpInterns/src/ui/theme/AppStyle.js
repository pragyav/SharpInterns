import {
    StyleSheet
} from 'react-native';
import AppTheme from "./AppTheme";


const AppStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppTheme.COLOR.BACKGROUND
    },
    bgImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    statusBarBackgroundView: {
        height: 30,
        backgroundColor: AppTheme.COLOR.STATUS_BAR_BACKGROUND,
        width: '100%'
    },
    renderMainView: {
        flex: 1,
        position: 'absolute',
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%'
    }

});


export default AppStyle;