/*
 * *****************************************
 * Account
 * *****************************************
 */

import React from 'react'
import styles from './accountStyle'
import { View, Text } from 'react-native'

export interface AccountProps {}

export const Account: React.FunctionComponent<AccountProps> = () => {
  return (
    <View style={styles.account} testID="account_view">
      <Text testID="account_text">This is Account Component !</Text>
    </View>
  )
}
