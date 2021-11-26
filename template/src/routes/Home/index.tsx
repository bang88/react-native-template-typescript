/*
 * *****************************************
 * Home
 * *****************************************
 */

import React from 'react'
import styles from './homeStyle'
import { View, Text } from 'react-native'

export interface HomeProps {}

export const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <View style={styles.home} testID="home_view">
      <Text testID="home_text">This is Home Component !</Text>
    </View>
  )
}
