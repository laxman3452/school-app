install yarn too
npm i -g yarn

npx react-native init coffeeaurcode

npm install everytime to make sure everything works fine after creating npx react-native appname

local.properties ==>>
sdk.dir = c/://Users//HP//AppData//local//sdk

npx react-native run-android || if is showinf error(error Cannot start server in new window because no terminal app was specified.) then use npm start and select a









Got to android directory : cd android
Do a gradlew clean: .\gradlew clean
Go back: cd ..
Create a folder called assets in /android/app/src/main/ directory
In the main directory do npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
Go again to android folder: cd android
Create the app doing assemble: .\gradlew assembleDebug
Find the apk in the folder: /android/app/build/outputs/apk/debug
