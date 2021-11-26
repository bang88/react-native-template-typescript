/*
 * *****************************************
 * Foods
 * *****************************************
 */

import React from 'react'
import styles from './foodsStyle'
import { View, Text } from 'react-native'

export interface FoodsProps {}

export const Foods: React.FunctionComponent<FoodsProps> = () => {
  return (
    <View style={styles.foods} testID="foods_view">
      <Text testID="foods_text">This is Foods Component !</Text>
    </View>
  )
}
