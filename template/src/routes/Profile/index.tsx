/*
 * *****************************************
 * Profile
 * *****************************************
 */

import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { AppScreenNavigationProp } from '../types'
import styles from './profileStyle'

export interface ProfileProps {}

export const Profile: React.FunctionComponent<ProfileProps> = () => {
  const { navigate } = useNavigation<AppScreenNavigationProp>()
  return (
    <View style={styles.profile} testID="profile_view">
      <Text testID="profile_text">This is Profile Component !</Text>
      <Button
        title="View my account."
        onPress={() =>
          navigate('Account', {
            id: 'x',
          })
        }
      />
    </View>
  )
}
