import {StyleSheet} from 'react-native';
import {rx} from '../../utils/dimensions';

export const Styles = StyleSheet.create({
    pickerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sectionContainer: {
        alignItems: 'center',
        width: '100%',
        height: 45 * rx,
        paddingHorizontal: 13 * rx,
        backgroundColor: 'white',
        borderRadius: 5 * rx,

    },
    input: {
        flex: 1,
        fontSize: 14,
        fontFamily: 'Helvetica',
    },
    icon: {
        width: 10 * rx,
        height: 10 * rx,
    },
});
