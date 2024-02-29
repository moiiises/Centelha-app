import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native'

import { Ionicons } from '@expo/vector-icons'

export default function CustomTabBar({ state, descriptors, navigation }) {
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                {state.routes.map(( route, index)=> {
                    const { options } = descriptors[route.key];

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented)
                        navigation.navigate({name: route.name, merge: true })
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return(
                        <TouchableOpacity 
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={styles.buttonTab}
                        >
                            <View style={{ alignItems: 'center', padding: 4, }}>
                                <View style={{ padding: 8, backgroundColor: isFocused ? "#3CD615" : "transparent", borderRadius: 99}}>
                                    <Ionicons
                                        name={options.tabBarIcon}
                                        size={33}
                                        color={isFocused ? "#FFF": "#535353"}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    )

                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    content:{
        flexDirection: 'row',
        marginBottom: Platform.OS === 'ios' ? 38 : 24, 
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        position: 'absolute',
        bottom: 0,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        elevation: 10,
        borderRadius: 60
    },
    buttonTab:{
        justifyContent: "center",
        alignItems: 'center'
    }
})