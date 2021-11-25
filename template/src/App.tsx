// In App.js in a new project

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { Account } from './routes/Account'
import { Profile } from './routes/Profile'
import { Settings } from './routes/Settings'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
function Home() {
  return (
    <Tab.Navigator screenOptions={{}}>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Account" component={Account} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
