/*
 * *****************************************
 * Vacation
 * *****************************************
 */

import React from 'react'
import styles from './vacationStyle'
import { View, Text } from 'react-native'

export interface VacationProps {}

export const Vacation: React.FunctionComponent<VacationProps> = () => {
  return (
    <View style={styles.vacation} testID="vacation_view">
      <Text testID="vacation_text">This is Vacation Component !</Text>
    </View>
  )
}
