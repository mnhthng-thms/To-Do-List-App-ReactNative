import React from 'react'
import { interpret } from 'xstate'
import * as dt from './src/utils/datetime'

import NavigationContainer from './src/navigation/NavigationContainer'
import AppMachine from './src/machines/AppMachine'

const App = () => {
  const mainService = interpret(AppMachine)
  mainService.start()

  return (
    <NavigationContainer
      service={mainService}
    />
  )
}

export default App