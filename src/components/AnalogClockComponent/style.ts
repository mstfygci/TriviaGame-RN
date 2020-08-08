import {RotateTransform, StyleSheet} from 'react-native';
import {rx} from '../../utils/dimensions';

export const Styles = StyleSheet.create({
    container: {
        width: 400 * rx,
        height: 400 * rx,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    text: {
        color: 'black',
        fontSize: 16,
    },
    clockArea: {
        width: '80%',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 4 * rx,
        borderRadius: 175 * rx,
        borderColor: 'black',
    },
    clock: {
        // marginTop: -4 * rx,
        // marginLeft: -2 * rx,
        width: 345 * rx,
        height: 345 * rx,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',

    },
    dot: {
        position: 'absolute',
        width: 15 * rx,
        height: 15 * rx,
        backgroundColor: '#6fc70b',
        zIndex: 20,
        borderRadius: 10 * rx,

    },
    hour: {
        position: 'absolute',
        alignItems: 'center',
    },
    hr: {
        width: 10 * rx,
        height: 80 * rx,
        backgroundColor: 'black',
        position: 'absolute',
        zIndex: 10,
        borderRadius: 6,
        opacity: 0.5,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'white',

    },
    min: {
        width: 6 * rx,
        height: 120 * rx,
        backgroundColor: 'black',
        position: 'absolute',
        zIndex: 11,
        borderRadius: 6,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'white',

    },
    sec: {
        width: 3 * rx,
        height: 150 * rx,
        backgroundColor: '#6fc70b',
        position: 'absolute',
        zIndex: 10,
        borderRadius: 6,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'white',
    },
});
