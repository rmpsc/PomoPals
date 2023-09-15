import { shorthands } from '@tamagui/shorthands'

import { themes, tokens } from '@tamagui/themes'

import { createTamagui, createFont } from 'tamagui' // or '@tamagui/core'

const interFont = createFont({
  family: 'Arial',
  size: {
    1: 35,
    2: 18,
    3: 10,
    6: 60,
    // ...
  },
  lineHeight: {
    1: 17,
    2: 22,
    3: 25,
    // ...
  },
  weight: {
    // Missing keys from partially defined objects will be filled in
    // 1 == 300, 5 == 300, 7 == 600
    1: '700',
    2: '400',
    4: '300',
    6: '600',
  },
  letterSpacing: {
    4: 0,
    8: -1,
  },

  // for native only, alternate family based on weight/style
  face: {
    // pass in weights as keys
    700: { normal: 'InterBold', italic: 'InterBold-Italic' },
    800: { normal: 'InterBold', italic: 'InterBold-Italic' },
    900: { normal: 'InterBold', italic: 'InterBold-Italic' },
  },
})

const appConfig = createTamagui({
  themes,
  tokens,
  shorthands,
  fonts: {
    body: interFont,
  }
})
export type AppConfig = typeof appConfig
declare module 'tamagui' {

  interface TamaguiCustomConfig extends AppConfig {}

}
export default appConfig
