import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Image } from 'react-native'
import { RootStackParamList } from '../types'
import { Account } from './Account'
import { Foods } from './Foods'
import { Home } from './Home'
import { Settings } from './Settings'
import { Vacation } from './Vacation'

const Stack = createStackNavigator<RootStackParamList>()
const Tab = createBottomTabNavigator<RootStackParamList>()
// https://app.streamlinehq.com/emojis/kawaii-emoji
const icons = {
  home: require('./assets/streamline-icon-u+1f3eb@200x200.png'),
  foods: require('./assets/streamline-icon-u+1f959@200x200.png'),
  settings: require('./assets/streamline-icon-u+2699@200x200.png'),
  vacation: require('./assets/streamline-icon-u+1f334@200x200.png'),
}
function HomeTab() {
  return (
    <Tab.Navigator screenOptions={{}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Image
              source={icons.home}
              style={{
                width: 26,
                height: 26,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Foods"
        component={Foods}
        options={{
          tabBarIcon: () => (
            <Image
              source={icons.foods}
              style={{
                width: 26,
                height: 26,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Vacation"
        component={Vacation}
        options={{
          tabBarIcon: () => (
            <Image
              source={icons.vacation}
              style={{
                width: 26,
                height: 26,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: () => (
            <Image
              source={icons.settings}
              style={{
                width: 26,
                height: 26,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

function RootApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeTab"
          component={HomeTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Account" component={Account} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootApp
