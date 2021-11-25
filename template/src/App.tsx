import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import RootApp from './routes'

function App() {
  return (
    <SafeAreaProvider>
      <RootApp />
    </SafeAreaProvider>
  )
}

export default App
