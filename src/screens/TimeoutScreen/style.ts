import {StyleSheet} from 'react-native';
import {rx} from '../../utils/dimensions';

const defColor1 = '#996868';
const defColor2 = 'rgba(0,0,0,0.4)';
const infoTextColor = 'white';
const infoTitleSize = 14;
const infoTextSize = 20;

export const Styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: defColor1,
    },
    headerContainer: {
        height: 80 * rx,
        backgroundColor: defColor2,
        flexDirection: 'row',
    },
    headerQuestionArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 15 * rx,
    },
    headerQuestionTitle: {
        fontSize: infoTitleSize,
        color: infoTextColor,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    headerQuestionText: {
        fontSize: infoTextSize,
        color: infoTextColor,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    headerPointArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 15 * rx,
    },
    headerPointTitle: {
        fontSize: infoTitleSize,
        color: infoTextColor,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    headerPointText: {
        fontSize: infoTextSize,
        color: infoTextColor,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    headerTimerArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 15 * rx,
    },
    headerTimerTitle: {
        fontSize: infoTitleSize,
        color: infoTextColor,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    headerTimerText: {
        fontSize: infoTextSize,
        color: infoTextColor,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    hourglassIconArea: {
        // width: 140 * rx,
        // height: 80 * rx,
        borderRadius: 20 * rx,
        padding: 5 * rx,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    hourglassIcon: {
        width: 170 * rx,
        height: 80 * rx,
        borderRadius: 35 * rx,
        justifyContent: 'center',
        alignItems: 'center',
        tintColor: '#893939',
        backgroundColor: 'white',
        resizeMode: 'contain',
    },
    statusTextArea: {
        marginTop: 30 * rx,
        alignItems: 'center',
        justifyContent: 'center',
    },
    statusText: {
        fontSize: 40,
        color: 'white',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    infoTextArea: {
        marginTop: 80 * rx,
        height: 100 * rx,
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoText: {
        fontSize: 26,
        color: 'white',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonTouchableArea: {
        marginTop: 50 * rx,
        height: 50 * rx,
        width: 200 * rx,
        backgroundColor: defColor2,
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
