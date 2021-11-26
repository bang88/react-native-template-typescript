/*
 * *****************************************
 * Profile
 * *****************************************
 */

import { userAtom } from '@app/jotais'
import { useNavigation } from '@react-navigation/core'
import { useAtom } from 'jotai'
import React from 'react'
import { Button, Text, View } from 'react-native'
import styles from './profileStyle'

export interface ProfileProps {}

export const Profile: React.FunctionComponent<ProfileProps> = () => {
  const { navigate } = useNavigation()
  const [user, setUser] = useAtom(userAtom)
  return (
    <View style={styles.profile} testID="profile_view">
      <Text testID="profile_text">This is Profile Component ! {user.name}</Text>
      <Button
        title="View my account."
        onPress={() => {
          setUser({
            name: 'bang bang bang!',
            id: user.id,
          })
          navigate('Account', {
            id: 'x',
          })
        }}
      />
    </View>
  )
}
