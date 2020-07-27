import React from 'react'
import { interpret } from 'xstate'
import * as dt from './src/utils/datetime'

import NavigationContainer from './src/navigation/NavigationContainer'
import AppMachine from './src/machines/AppMachine'

const App = () => {
  /* 
    `interpret` return a Service, which is a running instance of 
    the designed Machine. In other words, Machine is the blueprint 
    for a Service. 

    read more at: https://xstate.js.org/api/globals.html#interpret
  */

  const mainService = interpret(AppMachine)
  mainService.start()

  return (
    <NavigationContainer
      service={mainService}
    />
  )
}

export default App