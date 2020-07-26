import React, {memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Styles} from './style';

type Props<T> = {
    text: string;
    disabled: boolean;
    selectedAnswer: (answer: string) => void;
};

const typedMemo: <T>(c: T) => T = memo;
export const ChoiceComponent = typedMemo(function ChoiceComponent<T>(props: Props<T>) {
    const {text, disabled, selectedAnswer} = props;

    return (
        <TouchableOpacity
            disabled={disabled}
            style={disabled ? [Styles.buttonDisabled] : [Styles.buttonTouchableArea]}
            onPress={() => selectedAnswer(text)}>
            <Text style={Styles.buttonText}>
                {text}
            </Text>
        </TouchableOpacity>
    );
});
