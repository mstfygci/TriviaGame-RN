import {StyleSheet} from 'react-native';
import {rx} from '../../utils/dimensions';

export const Styles = StyleSheet.create({
    buttonTouchableArea: {
        marginTop: 50 * rx,
        height: 50 * rx,
        width: 200 * rx,
        backgroundColor: 'rgba(0,0,0,0.4)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5 * rx,
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
