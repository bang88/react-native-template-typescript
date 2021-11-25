/*
 * *****************************************
 * Profile
 * *****************************************
 */

import React from 'react'
import styles from './profileStyle'
import { View, Text } from 'react-native'

export interface ProfileProps {}

export const Profile: React.FunctionComponent<ProfileProps> = () => {
  return (
    <View style={styles.profile} testID="profile_view">
      <Text testID="profile_text">This is Profile Component !</Text>
    </View>
  )
}
