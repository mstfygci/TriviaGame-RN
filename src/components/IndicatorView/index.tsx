import React, {memo} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Style} from './style';
import {renderIf} from '../../utils/renderIf';
import {ReactNode} from 'react';

type IndicatorProps = {
    busy: boolean;
    children?: ReactNode;
};

export const IndicatorView = memo(function IndicatorView(props: IndicatorProps) {
    const {busy, children} = props;

    return (
        <>
            {children}
            {
                renderIf(busy)(() => (
                    <View style={Style.container} key={`indicator`}>
                        <ActivityIndicator size={'large'}/>
                    </View>
                ))
            }
        </>
    );
});
