import { View, Text } from 'react-native'
import React from 'react'

//import local components
import {Login} from '../components/login/Login'


const LoginScreen = () => {
  return (
    <View style={{backgroundColor: '#FFF', height: '100%'}}>
      <Login />
    </View>
  )
}

export {LoginScreen}