import {StyleSheet} from 'react-native';
import {rx} from '../../utils/dimensions';

const defColor2 = 'rgba(0,0,0,0.4)';
const infoTextColor = 'white';
const infoTitleSize = 14;
const infoTextSize = 20;

export const Styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: '#1544e3',
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
        justifyContent: 'space-around',
    },
    jokerButton: {
        width: 50 * rx,
        height: 50 * rx,
        borderRadius: 25 * rx,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20 * rx,
        marginLeft: 20 * rx,
        backgroundColor: defColor2,
    },
    jokerButtonText: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    questionTextArea: {
        marginTop: 80 * rx,
        height: 100 * rx,
        paddingHorizontal: 20 * rx,
        alignItems: 'center',
        justifyContent: 'center',
    },
    questionText: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    chooseContainer: {
        marginTop: 60 * rx,
        flex: 1,
        maxHeight: 300 * rx,
        justifyContent: 'space-around',
    },
});
