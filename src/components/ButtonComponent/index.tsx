import React, {memo} from 'react';
import {GestureResponderEvent, StyleProp, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {Styles} from './style';

type Props = {
    text: string;
    onPress: (event: GestureResponderEvent) => void;
    buttonStyle?: StyleProp<ViewStyle>;

};

export const ButtonComponent = memo(function ButtonComponent(props: Props) {
    return (
        <TouchableOpacity
            style={[Styles.buttonTouchableArea, props.buttonStyle]}
            onPress={props.onPress}>
            <Text style={Styles.buttonText}>
                {props.text}
            </Text>
        </TouchableOpacity>
    );
});
