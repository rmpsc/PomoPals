import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/themes'
import { createFont, createTamagui } from 'tamagui'

const interFont = createFont({
    family: 'Inter, Helvetica, Arial, sans-serif',
    size: {
      1: 12,
      2: 14,
      3: 15,
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

export default createTamagui({
  themes,
  tokens,
  shorthands,
  fonts: {
    body: interFont,
  },
})
