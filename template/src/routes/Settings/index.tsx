/*
 * *****************************************
 * Settings
 * *****************************************
 */

import React from 'react'
import styles from './settingsStyle'
import { View, Text } from 'react-native'

export interface SettingsProps {}

export const Settings: React.FunctionComponent<SettingsProps> = () => {
  return (
    <View style={styles.settings} testID="settings_view">
      <Text testID="settings_text">This is Settings Component !</Text>
    </View>
  )
}
