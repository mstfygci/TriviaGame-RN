import {StyleSheet} from 'react-native';
import {rx} from '../../utils/dimensions';

const defColor1 = '#f8a413';
const defColor2 = 'rgba(0,0,0,0.4)';
const defTextColor = 'white';
const defTextSize = 20;
const defItemTextSize = 14;

export const Styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: defColor1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 51 * rx,
        paddingRight: 20 * rx,
        marginTop: 10 * rx,
    },
    titleTextAreaLeft: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    titleTextAreaCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 25 * rx,
    },
    titleTextAreaRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    titleText: {
        textAlign: 'center',
        fontSize: 14,
        color: 'white',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',

    },
    flatList: {
        width: '100%',
        height: '100%',
    },
    flatListFooter: {height: 50},
    emptyListItem: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
    },
    emptyListText: {
        color: defTextColor,
        fontStyle: 'italic',
        fontSize: defTextSize,
    },
    listItemContainer: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 2 * rx,
        paddingHorizontal: 10 * rx,
    },
    listItem: {
        flex: 1,
        height: 40 * rx,
        flexDirection: 'row',
        paddingLeft: 10 * rx,
        paddingRight: 40 * rx,
        alignItems: 'center',
        borderRadius: 10 * rx,
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOpacity: 0.05,
        shadowOffset: {width: 0, height: 5 * rx},
        shadowRadius: 25 * rx,
        elevation: 5,
    },
    listItemLeftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    listItemLeftTextContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    listItemCenterTextContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    listItemRightTextContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    listItemCircle: {
        width: 26 * rx,
        height: 26 * rx,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: defColor1,
        borderRadius: 13 * rx,
        marginRight: 15 * rx,
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 5 * rx},
        shadowRadius: 25 * rx,
        elevation: 5,
    },
    listItemIndex: {
        color: 'white',
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    listItemText: {
        flex: 1,
        color: 'black',
        fontSize: defItemTextSize,
        fontStyle: 'italic',
        fontWeight: '500',

    },
    listContainer: {
        backgroundColor: defColor2,
    },
    infoTextArea: {
        marginTop: 80 * rx,
        height: 100 * rx,
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoText: {
        fontSize: defTextSize,
        color: 'white',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    menuButtonContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10 * rx,
    },
    deleteButtonContainer: {
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'space-around',
        alignItems: 'center',
        left: 10 * rx,
        bottom: 10 * rx,
    },
    leftButton: {
        height: 50 * rx,
        width: 50 * rx,
        backgroundColor: 'rgba(0,0,0,0.4)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5 * rx,
        marginRight: 20 * rx,
    },
});
