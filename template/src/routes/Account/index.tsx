/*
 * *****************************************
 * Account
 * *****************************************
 */

import logger from '@app/logger'
import { AppScreenRouteProp } from '@app/types'
import { useRoute } from '@react-navigation/core'
import React from 'react'
import { Text, View } from 'react-native'
import styles from './accountStyle'

export interface AccountProps {}

export const Account: React.FunctionComponent<AccountProps> = () => {
  const { params } = useRoute<AppScreenRouteProp<'Account'>>()
  logger.info('Account: ', params)
  return (
    <View style={styles.account} testID="account_view">
      <Text testID="account_text">This is Account Component {params.id}!</Text>
    </View>
  )
}
