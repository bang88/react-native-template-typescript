/*
 * *****************************************
 * Account
 * *****************************************
 */

import { userAtom } from '@app/jotais'
import logger from '@app/logger'
import { AppScreenRouteProp } from '@app/types'
import { useRoute } from '@react-navigation/core'
import { useAtom } from 'jotai'
import React from 'react'
import { Button, Text, View } from 'react-native'
import styles from './accountStyle'

export interface AccountProps {}

export const Account: React.FunctionComponent<AccountProps> = () => {
  const { params } = useRoute<AppScreenRouteProp<'Account'>>()
  logger.info('Account: ', params)
  const [user, setUser] = useAtom(userAtom)

  return (
    <View style={styles.account} testID="account_view">
      <Text testID="account_text">
        This is Account Component {params.id}! {user.name}
      </Text>
      <Button
        title="change name"
        onPress={() => {
          setUser({ ...user, name: 'bang!' })
        }}
      />
    </View>
  )
}
