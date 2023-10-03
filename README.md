**Pomopal - a study/focus app**
## Features
- **solo & group focus sessions**
- **profiles**
- **focus habit tracker**

## How to run locally
- locate cloned dir `cd path/to/your/project`
- this project currently uses node.js and npm for runtime & package mananging. install node.js and npm if not already installed `https://nodejs.org/en/download/`
- this react project was created using expo which must be installed as well `npm install -g expo-cli`
- install project dependencies with `npm install`
- to run locally, use `npm start` or `expo start`
- note: your project may not work correctly until you install the correct versions of the packages. use `npx expo install --fix`

## APIs & Libraries
### [Tamagui](https://tamagui.dev/)
Tamagui is a modern styling & component library
### [Study/Focus timer](https://www.npmjs.com/package/react-native-countdown-circle-timer)
Temporary component for countdown timer
### [AsyncStorage](https://react-native-async-storage.github.io/async-storage/docs/usage/)
The AsyncStorage library is used to store user tokens locally for each session
