/* Reference: 
  `https://github.com/wix/react-native-ui-lib/blob/master/src/helpers/Constants.ts`

   This module is written based on the assumption that the app  
   only supports horizontal mode of orientation
*/

import { Dimensions, Platform, StatusBar } from 'react-native'

const window = Dimensions.get('window')

const SCREEN_WIDTH = window.width
const SCREEN_HEIGHT = window.height

const STATUS_BAR_HEIGHT = Platform.select({
  // 736px is screen width of iPhone 7 
  ios: (SCREEN_WIDTH > 736 && !(Platform.isPad) && !(Platform.isTVOS)) ?
    44 : 20,
  android: StatusBar.currentHeight,
  default: 0
})

/* reference: https://stackoverflow.com/questions/33628677/react-native-responsive-font-size */

// base on standard 5 inch phone screen
const BASE_WIDTH = 350
const BASE_HEIGHT = 680

const normaliseSizeVertical = n => SCREEN_WIDTH / BASE_WIDTH * n
const normaliseSizeHorizontal = n => SCREEN_HEIGHT / BASE_HEIGHT * n
const normalise = (n, factor = 0.5) => n + (normaliseSizeVertical(n) - n) * factor

export {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  STATUS_BAR_HEIGHT,
  normalise,
  normaliseSizeVertical,
  normaliseSizeHorizontal
}