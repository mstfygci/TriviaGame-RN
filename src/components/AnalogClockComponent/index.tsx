import {Styles} from './style';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import {useInterval} from '../../hooks/interval';

export const TestScreen = memo(function TestScreen() {
    const day = new Date();
    const [hour, setHour] = useState(day.getHours() % 12);
    const [minute, setMinute] = useState(day.getMinutes());
    const [second, setSecond] = useState(day.getSeconds());

    useInterval(() => {
        console.log({day, hour, minute, second});
        setSecond(second + 1);
    }, 1000);

    useEffect(() => {
        if (second === 60) {
            setSecond(0);
            setMinute(minute + 1);
        }
        if (minute === 60) {
            setMinute(0);
            setHour(hour + 1);
        }
        if (hour === 13) {
            setHour(1);
        }
    }, [hour, minute, second]);

    return (
        <View style={Styles.container}>
            <Text style={Styles.text}>
                {hour < 0 ? '0' + hour : hour}:{minute < 10 ? '0' + minute : minute}:{second < 10 ? '0' + second : second}
            </Text>
            <TouchableOpacity style={Styles.clockArea} onPress={() => console.log('sa')}>
                <ImageBackground
                    style={Styles.clock}
                    source={require('./images/clock1.png')}>
                    <View style={Styles.dot}>
                    </View>
                    <View style={[Styles.hour, {
                        transform: [{rotate: (180 + (6 * minute)) + 'deg'}],

                    }]}>
                        <View
                            style={Styles.min}>

                        </View>
                    </View>
                    <View style={[Styles.hour, {
                        transform: [{rotate: (180 + (30 * hour)) + 'deg'}],
                    }]}>
                        <View
                            style={Styles.hr}>

                        </View>
                    </View>
                    <View style={[Styles.hour, {
                        transform: [{rotate: (180 + (6 * second)) + 'deg'}],
                    }]}>
                        <View
                            style={Styles.sec}>

                        </View>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
});

