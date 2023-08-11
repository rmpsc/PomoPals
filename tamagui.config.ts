import { themes } from '@tamagui/themes'
import { createFont, createTamagui, createTokens } from 'tamagui'

const size = {
  0: 0,
  'true': 18,
  1: 4,
  2: 20,
  6: 60,
};

const space = {
  ...size,
  '-0': -0,
  '-1': -5
};

const interFont = createFont({
  family: 'Arial',
  size: {
    1: 20,
    2: 15,
    3: 10,
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

const tokens = createTokens({
  size,
  space,
  color: {
    tomato: '#FF6347',
    lightPurple: '#EDD2F3',
    darkPurple: '#544179'
  },
  radius: {
    0: 0,
    1: 3,
    2: 5,
    3: 10,
    4: 15,
    5: 20
  },
  zIndex: {
    0: 0,
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500
  }
})

const shorthands = {
  ai: 'alignItems',
  bg: 'backgroundColor',
  br: 'borderRadius',
  f: 'flex',
  h: 'height',
  jc: 'justifyContent',
  m: 'margin',
  p: 'padding',
  w: 'width',
  lh: 'lineHeight',
  ta: 'textAlign',
  fd: 'flexDirection'
} as const;

const config = createTamagui({
  themes,
  tokens,
  shorthands,
  fonts: {
    body: interFont,
  }
});

type Conf = typeof config;
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default config;
