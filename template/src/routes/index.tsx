import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { RootStackParamList } from '../types'
import { Account } from './Account'
import { Profile } from './Profile'
import { Settings } from './Settings'

const Stack = createStackNavigator<RootStackParamList>()
const Tab = createBottomTabNavigator()

function Home() {
  return (
    <Tab.Navigator screenOptions={{}}>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}

function RootApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
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
