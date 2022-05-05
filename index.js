/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import RNFetchBlob from 'rn-fetch-blob';
// import {NativeModules} from 'react-native';
// const RNFetchBlob = NativeModules.RNFetchBlob;
import {Provider as PaperProvider} from 'react-native-paper';

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);

// AppRegistry.registerComponent(appName, () => App);
// const Fetch = RNFetchBlob.polyfill.Fetch; // replace built-in
// window.fetch = new Fetch({
//   // enable this option so that the response data conversion handled automatically
//   auto: true,
//   // when receiving response data, the module will match its Content-Type header// with strings in this array. If it contains any one of string in this array, // the response body will be considered as binary data and the data will be stored// in file system instead of in memory.// By default, it only store response data to file system when Content-Type // contains string `application/octet`.
//   binaryContentTypes: ['image/', 'video/', 'audio/', 'foo/'],
//   trusty: true,
// }).build();
