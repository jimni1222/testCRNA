# testCRNA
Example project for using caver-js with react native. This is a project to briefly introduce how caver-js can be used in the react native project.

## clone project
git clone https://github.com/jimni1222/testCRNA.git

## install
`npm install`

## run
`npm run start`
or
`npm run ios`
or
`npm run android`

## trouble shooting
### error Failed to build iOS project. We ran "xcodebuild" command but it exited with error code 65.
1. remove `build` directory in testCRNA/ios if existed. 
2. `cd ios`
3. `pod install`
4. `cd ..`
5. `sudo react-native run-ios`

### `npm run postinstall` sometimes can fix




## reference
https://gist.github.com/dougbacelar/29e60920d8fa1982535247563eb63766
