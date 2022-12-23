import { View, Text } from 'react-native'
import React from 'react'
import { Formik } from 'formik'

//import local components
import { InputForm } from './InputForm'
import { loginSchema } from '../../schemas/LoginSchemas'

const LoginForm = () => {

  return (
    <Formik
      initialValues={{ 
        email: '', 
        password: '' 
      }}
      validationSchema={loginSchema}
      onSubmit={values => console.log(values)}
    >
      {({ handleSubmit, values, handleChange, errors}) => (<View>
        <Text>Email</Text>
        <InputForm 
          keyboardType='email-address' 
          value={values.email} 
          onChangeText={handleChange('email')}
          placeholder='corre.electronico@cruzverde.com.co' 
        />
        <Text>{errors.email}</Text>
        <Text>Password</Text>
        <InputForm 
          password={true} 
          secureTextEntry={true} 
          value={values.password} 
          onChangeText={handleChange('password')}
          placeholder='********'
        />
      </View>)}
    </Formik>
  )
}

export { LoginForm }