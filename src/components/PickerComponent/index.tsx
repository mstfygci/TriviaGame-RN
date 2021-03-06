import React, {useCallback, useEffect, useState} from 'react';
import {Image, Platform, StyleProp, View, ViewStyle, Text} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {Styles} from './style';
import {Picker} from '@react-native-community/picker';

const typedMemo: <T>(c: T) => T = React.memo;

const downDisabledImage = require('./images/downArrowInactive.png');
const downImage = require('./images/downArrow.png');


interface Item<T> {
    label: string;
    value: T;
    key?: string | number;
    color?: string;
}

type Props<T> = {
    items: Item<T>[];
    value?: T;
    onValueChanged: (value: T, index: number) => void;
    placeholder: string;
    disabled?: boolean;
    onClose?: () => void;
    pickerContainerStyle?: StyleProp<ViewStyle>;
};

export const PickerComponentOld = typedMemo(function PickerComponentOld<T>(props: Props<T>) {
    const {onValueChanged: onValueChangedProp, items} = props;

    const [selectedItem, setSelectedItem] = useState<Item<T>>(null);

    function selectDefaultItem(props: Props<T>): boolean {
        if (props.value != null) {
            for (const item of props.items) {
                if (item.value === props.value) {
                    setSelectedItem(item);

                    return true;
                }
            }
        }

        return false;
    }

    useEffect(() => {
        selectDefaultItem(props);
    }, [props]);

    const onValueChanged = useCallback((newValue: T, index: number) => {
        if (selectedItem != null && selectedItem.value === newValue) {
            return;
        }

        setSelectedItem(items[index - 1]);
        onValueChangedProp(newValue, index);
    }, [selectedItem, onValueChangedProp, items]);

    return (
        <RNPickerSelect
            placeholder={{label: props.placeholder ? props.placeholder : 'Select an item...'}}
            disabled={props.disabled}
            items={props.items}
            value={Platform.select({
                android: undefined,
                ios: (selectedItem != null ? selectedItem.value : null),
            })}
            onValueChange={onValueChanged}
            doneText='OK'
            onClose={props.onClose}>
            <View
                style={[
                    Styles.pickerContainer,
                    Styles.sectionContainer,
                    props.disabled === true && {opacity: 0.7},
                ]}>
                <Text
                    numberOfLines={1}
                    style={[Styles.input, selectedItem == null ? {
                        color: '#999FA8',
                    } : {
                        color: '#081C3B',
                        fontWeight: 'bold',
                    }]}>
                    {selectedItem != null ? selectedItem.label : props.placeholder}
                </Text>
                <Image
                    style={[Styles.icon, selectedItem == null ? {tintColor: '#999FA8'} : {tintColor: '#081C3B'}]}
                    source={props.disabled === true ? downDisabledImage : downImage}/>
            </View>
        </RNPickerSelect>
    );
});
export const PickerComponent = typedMemo(function PickerComponent<T>(props: Props<T>) {
    const {onValueChanged: onValueChangedProp, items} = props;
    const [selectedItem, setSelectedItem] = useState<Item<T>>(null);
    const [selectedItemIndex, setSelectedItemIndex] = useState<number>(null);


    const onValueChanged = useCallback((index: number) => {

        setSelectedItem(selectedItem);
        onValueChangedProp(selectedItem.value, index);
    }, [selectedItem, onValueChangedProp, items]);

    return (
        <Picker
            selectedValue={selectedItem.value}
            style={Styles.sectionContainer}
            onValueChange={(itemIndex) => {
                onValueChanged(itemIndex);
            }}>
            {
                items.map((item) =>
                    <Picker.Item label={item.label} value={item.value}/>,
                )
            }
        </Picker>);
});
