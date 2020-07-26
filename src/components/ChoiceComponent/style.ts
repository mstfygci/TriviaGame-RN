import {StyleSheet} from 'react-native';
import {rx} from '../../utils/dimensions';

export const Styles = StyleSheet.create({
    container: {},
    touchableArea: {},
    text: {
        color: '#3C3C3C',
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
    },
    buttonTouchableArea: {
        height: 50 * rx,
        width: 350 * rx,
        backgroundColor: 'rgba(0,0,0,0.4)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5 * rx,
    },
    buttonDisabled: {
        height: 50 * rx,
        width: 350 * rx,
        backgroundColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5 * rx,
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
    },
});
