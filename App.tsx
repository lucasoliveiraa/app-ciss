import React from 'react';
import { StatusBar } from 'react-native';
import { Register } from './src/screen/Register';

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' translucent backgroundColor='transparent'/>
      <Register />
    </>
  )
}