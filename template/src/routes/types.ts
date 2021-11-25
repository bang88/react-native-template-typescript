import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { CompositeNavigationProp } from '@react-navigation/native'
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'

export type RootStackParamList = {
  Home: undefined
  Profile: { userId: string }
  Account: {
    id: string
  }
}
type NavKeys = keyof RootStackParamList

export type AppScreenNavigationProp<RouteName extends NavKeys = NavKeys> =
  CompositeNavigationProp<
    BottomTabNavigationProp<RootStackParamList>,
    StackNavigationProp<RootStackParamList, RouteName>
  >

export type Props<RouteName extends NavKeys = NavKeys> = StackScreenProps<
  RootStackParamList,
  RouteName
>

export type AppScreenRouteProp<RouteName extends NavKeys = NavKeys> =
  Props<RouteName>['route']

// https://reactnavigation.org/docs/typescript/#specifying-default-types-for-usenavigation-link-ref-etc
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
