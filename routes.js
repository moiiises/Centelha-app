import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './Home'
import Main from './pages/Main'
import Maps from './pages/House'
import House from './pages/Maps'
import Time from './pages/Time'
import User from './pages/User'

import CustomTabBar from './pages/components/CustomTabBar'

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#121212",

                tabBarStyle:{
                   borderTopWidth: 0,
                   backgroundColor: "#FFF"
                }
            }}

            tabBar={ (props) => <CustomTabBar {...props} />}
        >

            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarIcon: "return-down-back-sharp"
                }}
            />
            <Tab.Screen 
                name="House" 
                component={House}
                options={{
                    tabBarIcon: "ios-map-outline"
                }}
            />
            <Tab.Screen 
                name="Maps" 
                component={Maps}
                options={{
                    tabBarIcon: "ios-home-outline"
                }}
            />
            <Tab.Screen 
                name="Time" 
                component={Time}
                options={{
                    tabBarIcon: "timer-outline"
                }}
            />
            <Tab.Screen 
                name="User" 
                component={User}
                options={{
                    tabBarIcon: "apps-outline"
                }}
            />
        </Tab.Navigator>
    )
}