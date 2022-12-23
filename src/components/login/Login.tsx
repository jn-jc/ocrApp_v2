import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

//import theme
import theme from '../../../theme'

//import local components
import { LoginForm } from './LoginForm'

const Login = () => {
  return (
    <View>
      <View style={{ alignItems: 'center', marginTop: 70 }}>
        <Image source={require('../../../assets/Logocv.png')} fadeDuration={0} style={{ width: 150, height: 150, marginBottom: 15, marginLeft: 15 }} />
        <Text style={styles.title}>Ingresa</Text>
        <View>
          <LoginForm />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: theme.colors.primary,
    fontFamily: theme.fontFamily.main,
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 12,
  }
})


export { Login }