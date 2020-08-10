import {StyleSheet} from 'react-native';
import {rx} from '../../utils/dimensions';

export const Styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: '#1544e3',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContainer: {
        alignItems: 'center',

    },
    pickerContainer: {
        borderRadius: 10 * rx,
        width: 300 * rx,
        marginVertical: 10 * rx,
    },
    picker: {
        alignItems: 'center',
        width: '100%',
        height: 45 * rx,
        paddingHorizontal: 13 * rx,
        backgroundColor: 'white',
        borderRadius: 15 * rx,
    },
    titleTextArea: {
        height: 100 * rx,
    },
    titleText: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
    },
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
    },
    leaderboardButtonTouchableArea: {
        height: 35 * rx,
        width: 200 * rx,
        backgroundColor: 'rgba(0,0,0,0.4)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5 * rx,
    },
    leaderboardButtonText: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
    },
});
