import React, {memo, useCallback} from 'react';
import {
    Alert,
    FlatList,
    KeyboardAvoidingView,
    ListRenderItemInfo,
    Platform,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {Styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {ButtonComponent} from '../../components/ButtonComponent';
import {useDispatch, useSelector} from 'react-redux';
import {GlobalState} from '../../store/state';
import {LeaderboardItemModel} from '../../models/leaderboard-item.model';
import {Storage} from '../../utils/storage';
import {setLeaderboardAction} from '../../store/game/action';

const colors = [
    '#88a946',
    '#f893fd',
    '#7b17a8',
    '#c62c17',
    '#464b76',
];

const ListEmptyComponent = memo(function ListEmptyComponent() {
    return (
        <View style={Styles.emptyListItem}>
            <Text style={Styles.emptyListText}>
                No Records Found.
            </Text>
        </View>
    );
});

type ListItemProps = {
    index: number;
    item: LeaderboardItemModel;
};

const ListItem = memo(function ListItem(props: ListItemProps) {
    return (
        <TouchableOpacity
            style={Styles.listItemContainer}
            activeOpacity={1}>
            <View style={Styles.listItem}>
                <View style={Styles.listItemLeftContainer}>
                    <View
                        style={[Styles.listItemCircle, {backgroundColor: colors[props.index % colors.length]}]}>
                        <Text style={Styles.listItemIndex}>
                            {props.index + 1}
                        </Text>
                    </View>
                </View>
                <View style={Styles.listItemLeftTextContainer}>
                    <Text
                        style={[Styles.listItemText, {
                            color: colors[props.index % colors.length],
                            textAlign: 'left',
                        }]}
                        numberOfLines={1}>
                        {props.item.score}
                    </Text>
                </View>
                <View style={Styles.listItemCenterTextContainer}>
                    <Text
                        style={[Styles.listItemText, {
                            color: colors[props.index % colors.length],
                            textAlign: 'center',
                        }]}
                        numberOfLines={1}>
                        {props.item.difficult == null ? 'Any Type' : props.item.difficult}
                    </Text>
                </View>
                <View style={Styles.listItemRightTextContainer}>
                    <Text
                        style={[Styles.listItemText, {
                            color: colors[props.index % colors.length],
                            textAlign: 'right',
                        }]}
                        numberOfLines={1}>
                        {props.item.totalTimeSpend}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
});

const keyExtractor = (item: LeaderboardItemModel, index: number) => `key_${index.toString()}`;

export const LeaderBoardScreen = memo(function LeaderBoardScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const leaderboard: LeaderboardItemModel[] = useSelector((state: GlobalState) => state.game.leaderBoard);


    const moveToMain = useCallback(() => {
        navigation.navigate('Main');
    }, [navigation]);

    const clearList = useCallback(() => {
        Storage.removeLeaderboard()
            .then(() => {
                dispatch(setLeaderboardAction([]));
            }).catch((e) => {
            console.log({e});
            Alert.alert('Sorry !', 'Something went wrong.');
        });
    }, [dispatch]);

    const renderItem = useCallback((item: ListRenderItemInfo<LeaderboardItemModel>) =>
        <ListItem
            index={item.index}
            item={item.item}
        />, []);

    return (
        <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.select<'height' | 'position' | 'padding'>({
                android: undefined,
                ios: 'padding',
            })}>
            <SafeAreaView
                style={Styles.contentContainer}>
                <View style={Styles.headerContainer}>
                    <View style={Styles.titleTextAreaLeft}>
                        <Text style={Styles.titleText}>
                            Total {'\n'} Points
                        </Text>
                    </View>
                    <View style={Styles.titleTextAreaCenter}>
                        <Text style={Styles.titleText}>
                            Difficulty
                        </Text>
                    </View>
                    <View style={Styles.titleTextAreaRight}>
                        <Text style={Styles.titleText}>
                            Total{'\n'} Time Spent
                        </Text>
                    </View>

                </View>
                <View style={Styles.container}>
                    {
                        <FlatList
                            style={Styles.flatList}
                            data={leaderboard}
                            renderItem={renderItem}
                            keyExtractor={keyExtractor}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            ListEmptyComponent={ListEmptyComponent}
                            ListFooterComponent={<View style={Styles.flatListFooter}/>}
                        />
                    }
                    <View style={Styles.menuButtonContainer}>
                        <ButtonComponent
                            text={'Main Menu'}
                            onPress={moveToMain}/>
                    </View>
                    <View style={Styles.deleteButtonContainer}>
                        <ButtonComponent
                            buttonStyle={Styles.leftButton}
                            text={'Clear List'}
                            onPress={clearList}/>
                    </View>

                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
});
