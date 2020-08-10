import React, {memo, useCallback, useMemo, useState} from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Platform, SafeAreaView,
    Text, TouchableOpacity,
    View,
} from 'react-native';
import {Styles} from './style';
import {PickerComponent, PickerComponentOld} from '../../components/PickerComponent';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {GlobalState} from '../../store/state';
import {CategoryModel} from '../../models/category.model';
import {getQuestionApi} from '../../api/request';
import {setJokerUsedAction, setQuestionListAction, setSelectedChoiceAction} from '../../store/game/action';
import {changeBusyAction} from '../../store/ui/action';
import {Difficulty} from '../../store/game/state';
import {Picker} from '@react-native-community/picker';
import {rx} from '../../utils/dimensions';

const difficultyList: { label: string, value: string }[] = [
    {label: 'Easy', value: 'easy'},
    {label: 'Medium', value: 'medium'},
    {label: 'Hard', value: 'hard'},
];

export const MainScreen = memo(function MainScreen() {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const categoryList: CategoryModel[] = useSelector((state: GlobalState) => state.game.categoryList);

    const pickerCategoryList = useMemo(
        () => {
            let arr = [];
            for (let i of categoryList) {
                arr.push({label: i.name, value: i});
            }
            return arr;
        },
        [categoryList]);

    const [selectedCategory, setSelectedCategory] = useState<CategoryModel>(null);

    const [selectedDifficulty, setSelectedDifficulty] = useState<string>(null);

    const leaderboardPressed = useCallback(() => {
        navigation.navigate('LeaderBoard');
    }, [navigation]);


    const startPressed = useCallback(() => {
        dispatch(changeBusyAction(true));
        getQuestionApi(selectedCategory, selectedDifficulty)
            .then(response => {
                if (response.length > 9) {
                    dispatch(setSelectedChoiceAction(selectedCategory, selectedDifficulty as Difficulty));
                    dispatch(setQuestionListAction(response));
                    dispatch(setJokerUsedAction(false));
                    navigation.navigate('Question');
                } else {
                    Alert.alert('Sorry !', `There are not enough questions in the \n${selectedCategory.name}`);
                }
            })
            .catch((e) => {
                console.log({e});
                Alert.alert('Sorry !', 'Something went wrong.');
            })
            .finally(() => {
                dispatch(changeBusyAction(false));
            });

    }, [dispatch, navigation, selectedCategory, selectedDifficulty]);

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
                    <TouchableOpacity
                        style={Styles.leaderboardButtonTouchableArea}
                        onPress={leaderboardPressed}>
                        <Text style={Styles.leaderboardButtonText}>
                            Leaderboard
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={Styles.container}>
                    <View style={Styles.titleTextArea}>
                        <Text style={Styles.titleText}>
                            A Trivia Game
                        </Text>
                    </View>
                    <View style={Styles.pickerContainer}>
                        <PickerComponentOld
                            items={pickerCategoryList}
                            onValueChanged={setSelectedCategory}
                            value={selectedCategory}
                            placeholder='Any Category'
                        />
                    </View>

                    <View style={Styles.pickerContainer}>
                        <Picker
                            selectedValue={selectedDifficulty}
                            style={Styles.picker}
                            onValueChange={(itemValue, itemIndex) => {
                                setSelectedDifficulty(itemValue.toString());
                            }}>
                            {
                                difficultyList.map((item) =>
                                    <Picker.Item label={item.label} value={item.value}/>,
                                )
                            }
                        </Picker>
                    </View>
                    <TouchableOpacity
                        style={Styles.buttonTouchableArea}
                        onPress={startPressed}>
                        <Text style={Styles.buttonText}>
                            GET STARTED
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
});
