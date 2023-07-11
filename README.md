# React native - Boilerplate app bootstrapped in Typescript

A react native application with linting, husky and commitlint.

[![React Native](https://iili.io/HYGqeKQ.png)](https://reactnative.dev/)

## Tech stack

-   React Native : For Cross platform mobile app development (iOS & Android)
-   Node JS: For JS runtime environment
-   Javascript : For application development
-   Linting: eslint with commit hooks

## Packages used

| Package      | Version |
| ------------ | ------- |
| React        | 18.x    |
| React Native | 0.71.x  |

### Upgrade all dependency packages in a single shot

-   yarn yarn-upgrade-all

### Run Android emulator Mac:-

```
cd ~/Library/Android/sdk/emulator
./emulator -list-avds
./emulator -avd {AVD_NAME}
```

### Run on iOS simulator

```
yarn ios:dev --simulator="iPhone 8"
yarn ios:dev --simulator="iPhone 8 Plus"
yarn ios:dev --simulator="iPhone 11"
```

### Delete Cache (Xcode)

```
rm -rf "${HOME}/Library/Caches/CocoaPods"
xcrun simctl delete unavailable
rm -rf ~/Library/Caches
rm -rf ~/Library/Developer/Xcode/Archives
rm -rf ~/Library/Developer/Xcode/DerivedData
rm -rf ~~/Library/Developer/Xcode/iOS Device Logs/
```

### Delete Device List (Xcode)

```
rm -rf  ~/Library/Developer/CoreSimulator/Devices/
If there is Unable to boot device error run,
xcrun simctl erase all
```

### Delete Cache (Android)

Go to android folder

```
./gradlew clean
./gradlew cleanBuildCache
```

\
