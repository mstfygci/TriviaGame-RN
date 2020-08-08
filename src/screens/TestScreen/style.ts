import {RotateTransform, StyleSheet} from 'react-native';
import {rx} from '../../utils/dimensions';

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    text: {
        color: 'black',
        fontSize: 20,
    },
    clockArea: {
        width: 350 * rx,
        height: 350 * rx,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 4 * rx,
        borderRadius: 175 * rx,
        borderColor: 'black',
    },
    clock: {
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
        backgroundColor: '#c70b11',
        zIndex: 20,
        borderRadius: 10 * rx,
        borderColor: '#6fc70b',

    },
    hour: {
        position: 'absolute',
        alignItems: 'center',
    },
    hr: {
        width: 10 * rx,
        height: 60 * rx,
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
        height: 100 * rx,
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
        backgroundColor: '#c70b11',
        position: 'absolute',
        zIndex: 10,
        borderRadius: 6,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#6fc70b',
        transform: [{translateY: -30 * rx}],
    },
});
