import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { CompositeNavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export type RootStackParamList = {
  Home: undefined
  Profile: { userId: string }
  Account: {
    id: string
  }
}

export type AppScreenNavigationProp<
  RouteName extends keyof RootStackParamList = keyof RootStackParamList,
> = CompositeNavigationProp<
  BottomTabNavigationProp<RootStackParamList>,
  StackNavigationProp<RootStackParamList, RouteName>
>
